pipeline {
    agent any

    stages {
        stage('Checkout') {
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
                sh 'npx playwright test --reporter=html'
            }
        }

        stage('Archive Reports') {
            steps {
                archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
            }
        }
    }
}
