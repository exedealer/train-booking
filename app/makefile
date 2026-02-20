.PHONY: dist
dist: \
		dist/ui/main.js \
		dist/ui/style.css \
		dist/ui/home.html \
		dist/ui/favicon.ico
	cp -r server dist/

dist/ui/%.js: ui/%.js
	esbuild $< --outfile=$@ \
		--bundle \
		--format=esm

dist/ui/%.css: ui/%.css
	esbuild $< --outfile=$@ \
		--bundle \
		--target=chrome100 \
		--loader:.svg=dataurl

dist/%: %
	install -D $< $@
	chmod a-x $@
