# Contributing to PCA Mock Exam

Thank you for your interest in contributing to the Prometheus Certified Associate (PCA) Mock Exam project! 🎉

This project helps candidates prepare for the PCA certification by providing practice questions in an interactive web application. We welcome contributions in the form of new questions, improvements to existing questions, bug fixes, and feature enhancements.

## 📋 Table of Contents

- [Contributing to PCA Mock Exam](#contributing-to-pca-mock-exam)
  - [📋 Table of Contents](#-table-of-contents)
  - [🤝 Code of Conduct](#-code-of-conduct)
  - [📚 Contributing Questions](#-contributing-questions)
    - [Question Format](#question-format)
    - [Required Fields](#required-fields)
  - [🛠️ Development Setup](#️-development-setup)
    - [Local Development](#local-development)
  - [📞 Questions?](#-questions)

## 🤝 Code of Conduct

Please be respectful and professional in all interactions. We're here to help each other learn and improve.

## 📚 Contributing Questions

Questions are the heart of this mock exam! Here's how to contribute:

### Question Format

Questions are stored in `/app/data/questions.json` with the following structure:

```json
{
  "question": "Your question text here?",
  "choices": [
    "Option A",
    "Option B",
    "Option C",
    "Option D"
  ],
  "correct": 2,
  "section": "Architecture",
  "explanation": "Detailed explanation of why the correct answer is right and why other options are wrong."
}
```

### Required Fields

- **question**: Clear, concise question text
- **choices**: Array of 4 answer options
- **correct**: Index (0-3) of the correct answer
- **section**: One of the official exam domains
- **explanation**: Detailed explanation with reasoning

## 🛠️ Development Setup

### Local Development

```bash
# Clone repository
git clone https://github.com/your-username/pca-mock-exam.git

# Build the image
make build

# Run the container
make run

# Delete the container
make delete
```

## 📞 Questions?

- Open an issue for public discussion
- Check existing issues and PRs first
- Be patient - this is a volunteer-driven project

---

**Thank you for helping make PCA certification preparation better for everyone!** 🎯
