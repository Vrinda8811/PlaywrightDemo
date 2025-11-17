pipeline {
    agent any

    environment {
        // Optional: Add environment variables if needed
        NODE_VERSION = "18"
    }

    tools {
        jdk 'JDK11' // अगर Java requirement है
        git 'Default' // Git installation name
        // NodeJS tool configuration optional, agar globally install hai to skip kare
    }

    stages {
        stage('Checkout') {
            steps {
