# Commands
.DEFAULT_GOAL := help
help: 
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n",	$$1, $$2}'


build:	# Build Docker image
	docker compose build

run:	# Run Docker containers
	docker compose up -d
