pipeline {
    agent any

    environment {
        NODE_HOME = tool name: 'node18', type: 'NodeJS'  // Jenkins → Manage Jenkins → Global Tool Configuration → NodeJS
        PATH = "${NODE_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout SCM') {
            steps {
                git branch: 'main', url: 'https://github.com/Vrinda8811/PlaywrightDemo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                // Agar tests fail ho to bhi pipeline continue kare
                sh 'npx playwr
