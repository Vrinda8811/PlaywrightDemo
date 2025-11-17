pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Vrinda8811/PlaywrightDemo.git', branch: 'main'
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
                // Agar tests fail ho bhi jaye, pipeline fail na ho
                sh 'npx playwright test --reporter=html || true'
            }
        }

        stage('Archive Reports') {
            steps {
                archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished!'
        }
    }
}
