pipeline {
    agent any

    tools {
        nodejs 'node18' // Jenkins → Manage Jenkins → Global Tool Configuration → NodeJS name
    }

    environment {
        // Optional: set PATH if needed
        PATH = "$PATH:/usr/local/bin"
    }

    stages {
        stage('Checkout') {
            steps {
                // Replace credentialsId if repo is private
                git branch: 'main',
                    url: 'https://github.com/Vrinda8811/PlaywrightDemo.git',
                    credentialsId: 'github-credentials' 
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
                // This will save Playwright HTML report as artifact in Jenkins
                archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            echo "Build finished. Check artifacts for test reports."
        }
        success {
            echo "All tests passed! 🎉"
        }
        failure {
            echo "Build failed! Check console output for details."
        }
    }
}
