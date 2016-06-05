.PHONY: all html dev-html dev-theme dev

html:
	hugo

theme: themes/timeline/source/css/main.scss
	cd themes/timeline && npm run build

all: theme html

dev-html:
	hugo server

dev-theme:
	cd themes/timeline && npm start

# use dev with -j 2
dev: dev-theme dev-html
