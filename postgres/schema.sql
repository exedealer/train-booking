\connect postgres

-- create schema postgis;
-- create extension postgis schema postgis;
-- alter database postgres set search_path = "$user", public, postgis;
-- set search_path = "$user", public, postgis;

create schema btree_gist;
create extension btree_gist schema btree_gist;

create table station (
  station_id   text not null,
  name         text not null unique,
  tz           text not null,

  -- just for visual validation of generated data
  geom         text, -- geometry(point, 4326) not null,

  primary key (station_id) include (tz)
);

-- for searching stations by prefix
-- TODO collation
create index on station (lower(name)) include (station_id);

create table train (
  train_id      int  primary key,
  name          text not null,
  dep_time      time not null,
  weekdays      bit(7) not null

  -- TODO train formation
  -- n_cars        smallint not null,
  -- seats_per_car smallint not null
);

create table stop (
  train_id        int not null references train,
  stop_order      smallint not null,
  station_id      text not null references station,
  arr_offset      interval,
  dep_offset      interval,
  price           money not null,
  primary key (train_id, stop_order)
);

create index on stop (station_id) include (train_id, stop_order, arr_offset, dep_offset);
create index on stop (train_id, station_id) include (stop_order, arr_offset, dep_offset);

create table booking (
  booking_id      bigint generated always as identity primary key,
  train_id        int not null references train,
  train_start     timestamp not null,
  span            int4range not null,
  seat            text not null,
  passenger       text not null,
  -- created_at      timestamptz not null default now()
  -- cost money
  -- departure timestamp

  -- index created by constraint also expected to be used
  -- when querying for occupied seats
  constraint no_overlapping_bookings exclude using gist (
    train_id        with =,
    train_start     with =,
    seat            with =,
    span            with &&
  )
);

create role web with login;
grant select on table station to web;
grant select on table train to web;
grant select on table stop to web;
grant select, insert on table booking to web;


INSERT INTO station (station_id, name, tz, geom) VALUES
('MOW', 'Moscow',          'Europe/Moscow',    'SRID=4326;POINT(37.6173 55.7558)'),
('SPB', 'Saint Petersburg', 'Europe/Moscow',    'SRID=4326;POINT(30.3141 59.9343)'),
('KIV', 'Kyiv',            'Europe/Kyiv',      'SRID=4326;POINT(30.5234 50.4501)'),
('WAR', 'Warsaw',          'Europe/Warsaw',    'SRID=4326;POINT(21.0122 52.2297)'),
('BER', 'Berlin',          'Europe/Berlin',    'SRID=4326;POINT(13.4050 52.5200)'),
('PRG', 'Prague',          'Europe/Prague',    'SRID=4326;POINT(14.4378 50.0755)'),
('VIE', 'Vienna',          'Europe/Vienna',    'SRID=4326;POINT(16.3738 48.2082)'),
('BUD', 'Budapest',        'Europe/Budapest',  'SRID=4326;POINT(19.0402 47.4979)'),
('BUC', 'Bucharest',       'Europe/Bucharest', 'SRID=4326;POINT(26.1025 44.4268)'),
('SOF', 'Sofia',           'Europe/Sofia',     'SRID=4326;POINT(23.3219 42.6977)'),
('BEL', 'Belgrade',        'Europe/Belgrade',  'SRID=4326;POINT(20.4489 44.7866)'),
('ZAG', 'Zagreb',          'Europe/Zagreb',    'SRID=4326;POINT(15.9819 45.8150)'),
('LJU', 'Ljubljana',       'Europe/Ljubljana', 'SRID=4326;POINT(14.5058 46.0569)'),
('MIL', 'Milan',           'Europe/Rome',      'SRID=4326;POINT(9.1900 45.4642)'),
('ROM', 'Rome',            'Europe/Rome',      'SRID=4326;POINT(12.4964 41.9028)'),
('NAP', 'Naples',          'Europe/Rome',      'SRID=4326;POINT(14.2681 40.8518)'),
('FLR', 'Florence',        'Europe/Rome',      'SRID=4326;POINT(11.2558 43.7696)'),
('VEN', 'Venice',          'Europe/Rome',      'SRID=4326;POINT(12.3155 45.4408)'),
('MUN', 'Munich',          'Europe/Berlin',    'SRID=4326;POINT(11.5820 48.1351)'),
('FRA', 'Frankfurt',       'Europe/Berlin',    'SRID=4326;POINT(8.6821 50.1109)'),
('HAM', 'Hamburg',         'Europe/Berlin',    'SRID=4326;POINT(9.9937 53.5511)'),
('AMS', 'Amsterdam',       'Europe/Amsterdam', 'SRID=4326;POINT(4.9041 52.3676)'),
('BRU', 'Brussels',        'Europe/Brussels',  'SRID=4326;POINT(4.3517 50.8503)'),
('LUX', 'Luxembourg',      'Europe/Luxembourg','SRID=4326;POINT(6.1296 49.6116)'),
('PAR', 'Paris',           'Europe/Paris',     'SRID=4326;POINT(2.3522 48.8566)'),
('LYO', 'Lyon',            'Europe/Paris',     'SRID=4326;POINT(4.8357 45.7640)'),
('MAR', 'Marseille',       'Europe/Paris',     'SRID=4326;POINT(5.3698 43.2965)'),
('BAR', 'Barcelona',       'Europe/Madrid',    'SRID=4326;POINT(2.1734 41.3874)'),
('MAD', 'Madrid',          'Europe/Madrid',    'SRID=4326;POINT(-3.7038 40.4168)'),
('LIS', 'Lisbon',          'Europe/Lisbon',    'SRID=4326;POINT(-9.1393 38.7223)'),
('LON', 'London',          'Europe/London',    'SRID=4326;POINT(-0.1276 51.5074)'),
('EDI', 'Edinburgh',       'Europe/London',    'SRID=4326;POINT(-3.1883 55.9533)'),
('DUB', 'Dublin',          'Europe/Dublin',    'SRID=4326;POINT(-6.2603 53.3498)'),
('COP', 'Copenhagen',      'Europe/Copenhagen','SRID=4326;POINT(12.5683 55.6761)'),
('STO', 'Stockholm',       'Europe/Stockholm', 'SRID=4326;POINT(18.0686 59.3293)'),
('OSL', 'Oslo',            'Europe/Oslo',      'SRID=4326;POINT(10.7522 59.9139)'),
('HEL', 'Helsinki',        'Europe/Helsinki',  'SRID=4326;POINT(24.9384 60.1699)'),
('RIG', 'Riga',            'Europe/Riga',      'SRID=4326;POINT(24.1052 56.9496)'),
('VIL', 'Vilnius',         'Europe/Vilnius',   'SRID=4326;POINT(25.2797 54.6872)'),
('TAL', 'Tallinn',         'Europe/Tallinn',   'SRID=4326;POINT(24.7536 59.4370)'),
('MIN', 'Minsk',           'Europe/Minsk',     'SRID=4326;POINT(27.5615 53.9045)'),
('ATH', 'Athens',          'Europe/Athens',    'SRID=4326;POINT(23.7275 37.9838)'),
('IST', 'Istanbul',        'Europe/Istanbul',  'SRID=4326;POINT(28.9784 41.0082)'),
('ZUR', 'Zurich',          'Europe/Zurich',    'SRID=4326;POINT(8.5417 47.3769)'),
('GEN', 'Geneva',          'Europe/Zurich',    'SRID=4326;POINT(6.1432 46.2044)'),
('NIC', 'Nice',            'Europe/Paris',     'SRID=4326;POINT(7.2620 43.7102)'),
('KRK', 'Krakow',          'Europe/Warsaw',    'SRID=4326;POINT(19.9450 50.0647)'),
('GDA', 'Gdansk',          'Europe/Warsaw',    'SRID=4326;POINT(18.6466 54.3520)'),
('BRA', 'Bratislava',      'Europe/Bratislava','SRID=4326;POINT(17.1077 48.1486)'),
('POR', 'Porto',           'Europe/Lisbon',    'SRID=4326;POINT(-8.6291 41.1579)');


INSERT INTO train (train_id, name, dep_time, weekdays) VALUES
(1, 'East Express: Moscow - Paris'        , '21:30', B'1010100'),
(2, 'Riviera Express: Moscow - Nice'      , '19:00', B'0100010'),
(3, 'Nordic Balkan: Stockholm - Istanbul' , '16:00', B'1000010'),
(4, 'Atlantic Express: Lisbon - Moscow'   , '08:00', B'0010000'),
(5, 'Orient Line: London - Istanbul'      , '10:15', B'0100100');

-- Route 1: Moscow - Paris (~40h)
-- Moscow → Minsk → Warsaw → Berlin → Frankfurt → Paris
INSERT INTO stop (train_id, stop_order, station_id, arr_offset, dep_offset, price) VALUES
(1, 0, 'MOW', NULL,                    '0:00',                '0.00'),
(1, 1, 'MIN', '9 hours 30 minutes',    '9 hours 50 minutes',  '42.00'),
(1, 2, 'WAR', '18 hours',              '18 hours 30 minutes', '78.00'),
(1, 3, 'BER', '24 hours 15 minutes',   '24 hours 45 minutes', '115.00'),
(1, 4, 'FRA', '30 hours',              '30 hours 20 minutes', '148.00'),
(1, 5, 'PAR', '40 hours',              NULL,                  '185.00');

-- Route 2: Moscow - Marseille (~50h)
-- Moscow → Kyiv → Budapest → Ljubljana → Milan → Nice → Marseille
INSERT INTO stop (train_id, stop_order, station_id, arr_offset, dep_offset, price) VALUES
(2, 0, 'MOW', NULL,                   '0:00',                '0.00'),
(2, 1, 'KIV', '12 hours',             '12 hours 30 minutes', '48.00'),
(2, 2, 'BUD', '24 hours',             '24 hours 30 minutes', '92.00'),
(2, 3, 'LJU', '30 hours 45 minutes',  '31 hours 5 minutes',  '118.00'),
(2, 4, 'MIL', '37 hours',             '37 hours 25 minutes', '152.00'),
(2, 5, 'NIC', '43 hours',             '43 hours 20 minutes', '178.00'),
(2, 6, 'MAR', '47 hours',             NULL,                  '198.00');

-- Route 3: Stockholm - Istanbul (~55h)
-- Stockholm → Copenhagen → Berlin → Prague → Budapest → Belgrade → Sofia → Istanbul
INSERT INTO stop (train_id, stop_order, station_id, arr_offset, dep_offset, price) VALUES
(3, 0, 'STO', NULL,                   '0:00',                '0.00'),
(3, 1, 'COP', '5 hours 30 minutes',   '5 hours 50 minutes',  '35.00'),
(3, 2, 'BER', '11 hours',             '11 hours 30 minutes', '62.00'),
(3, 3, 'PRG', '16 hours 30 minutes',  '16 hours 55 minutes', '88.00'),
(3, 4, 'BUD', '23 hours',             '23 hours 30 minutes', '120.00'),
(3, 5, 'BEL', '29 hours',             '29 hours 25 minutes', '148.00'),
(3, 6, 'SOF', '38 hours',             '38 hours 30 minutes', '182.00'),
(3, 7, 'IST', '50 hours',             NULL,                  '225.00');

-- Route 4: Lisbon - Moscow (~72h)
-- Lisbon → Madrid → Barcelona → Lyon → Zurich → Munich → Vienna → Krakow → Warsaw → Minsk → Moscow
INSERT INTO stop (train_id, stop_order, station_id, arr_offset, dep_offset, price) VALUES
(4, 0,  'LIS', NULL,                    '0:00',                '0.00'),
(4, 1,  'MAD', '10 hours',              '10 hours 30 minutes', '38.00'),
(4, 2,  'BAR', '17 hours',              '17 hours 25 minutes', '68.00'),
(4, 3,  'LYO', '24 hours',              '24 hours 20 minutes', '98.00'),
(4, 4,  'ZUR', '28 hours 30 minutes',   '28 hours 50 minutes', '122.00'),
(4, 5,  'MUN', '32 hours',              '32 hours 25 minutes', '145.00'),
(4, 6,  'VIE', '36 hours',              '36 hours 30 minutes', '172.00'),
(4, 7,  'KRK', '41 hours',              '41 hours 20 minutes', '195.00'),
(4, 8,  'WAR', '45 hours',              '45 hours 30 minutes', '218.00'),
(4, 9,  'MIN', '54 hours',              '54 hours 25 minutes', '258.00'),
(4, 10, 'MOW', '64 hours',              NULL,                  '305.00');

-- Route 5: London - Istanbul (~52h)
-- London → Brussels → Luxembourg → Zurich → Milan → Venice → Ljubljana → Zagreb → Belgrade → Istanbul
INSERT INTO stop (train_id, stop_order, station_id, arr_offset, dep_offset, price) VALUES
(5, 0,  'LON', NULL,                    '0:00',                '0.00'),
(5, 1,  'BRU', '2 hours 30 minutes',    '2 hours 50 minutes',  '28.00'),
(5, 2,  'LUX', '5 hours 30 minutes',    '5 hours 50 minutes',  '52.00'),
(5, 3,  'ZUR', '10 hours',              '10 hours 25 minutes', '85.00'),
(5, 4,  'MIL', '14 hours 30 minutes',   '14 hours 55 minutes', '118.00'),
(5, 5,  'VEN', '18 hours',              '18 hours 20 minutes', '142.00'),
(5, 6,  'LJU', '21 hours',              '21 hours 20 minutes', '165.00'),
(5, 7,  'ZAG', '23 hours',              '23 hours 25 minutes', '182.00'),
(5, 8,  'BEL', '29 hours',              '29 hours 30 minutes', '210.00'),
(5, 9,  'IST', '48 hours',              NULL,                  '260.00');


insert into booking (train_id, train_start, span, seat, passenger) values
(1, '2026-03-09 21:30:00', '[3, 4)', '1/10', 'exedealer');

vacuum full verbose analyze;
