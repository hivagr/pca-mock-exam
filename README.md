# Prometheus Certified Associate — Mock Exam

![Docker](https://img.shields.io/badge/docker-ready-blue)
![License](https://img.shields.io/badge/license-MIT-green)

![pca](./app/public/pca-logo.png)

This repository provides a single-page web app for practicing Prometheus Certified Associate (PCA) exam questions. The app is built with Node.js and serves a quiz interface with multiple-choice questions.

---

## 🚀 Features

- Multiple-choice questions based on the official PCA practice exam
- Instant feedback and explanations
- Sectioned questions for focused study
- Dockerized for easy deployment

---

## 📁 Project Layout

```bash
pca-mock-exam/
├── Dockerfile
├── .dockerignore
├── app/
│   ├── package.json
│   ├── server.js
│   ├── public/
│   │   ├── index.html
│   │   ├── app.js
│   │   ├── styles.css
│   ├── data/
│   │   ├── questions.json
```

---

## 🛠️ Usage

### Run the pre-build container

```sh
docker run --name pca-mock-exam -p 3000:3000 hiddevg/pca-mock-exam:latest
```

## 💻 Development usage

### Build the Docker image

```sh
docker build -t pca-mock-exam:latest .
```

### Run the container (port 3000)

```sh
docker run --name pca-mock-exam -p 3000:3000 pca-mock-exam:latest
```

Open [http://localhost:3000](http://localhost:3000) in your browser to start practicing.

---

## 📝 Contributing

Pull requests and suggestions are welcome! Feel free to submit new questions, improvements, or bug fixes.

---

## 📄 License

This project is licensed under the MIT License.
