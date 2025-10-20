CONTAINER := pca-mock-exam
IMAGE := $(CONTAINER):latest

.DEFAULT_GOAL := help

# Show available commands
help: ## Show this help message
	@echo "Available targets:"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2}'
# Makefile for Docker workflow

.PHONY: build run stop delete

build: ## Build the Docker image
	docker build -t $(IMAGE) .

run: ## Run the image (port 3000)
	docker run -d --name $(CONTAINER) -p 3000:3000 $(IMAGE)

stop: ## Stop the running container
	docker stop $(CONTAINER) || true

delete:	## Delete the container and image
	docker rm -f $(CONTAINER) || true
	docker rmi -f $(IMAGE) || true
