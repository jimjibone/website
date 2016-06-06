.PHONY: theme html deps dev-html dev-theme dev

all: theme html

theme:
	cd themes/timeline && npm run build

html:
	hugo --baseURL=https://jamesreuss.co.uk/ --destination="public"

deps:
	cd themes/timeline && npm install

dev-html:
	hugo server

dev-theme:
	cd themes/timeline && npm start

# use dev with `-j 2`
dev: dev-theme dev-html
