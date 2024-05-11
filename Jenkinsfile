pipeline {
    agent any
    parameters {
        string(name: 'SPEC', defaultValue: "cypress/integration/**/**", description: "Enter the script path that you want to execute")
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: "Choose the browser where you want to execute your scripts")
    }
    options {
        ansiColor('xterm')
    }
    stages {
        stage('Building') {
            steps {
                echo "Building the app"
                // Adăugați pașii de construire aici, dacă este necesar
            }
        }
        stage("Testing") {
            steps {
                bat "npm i"
                bat "npx cypress run --browser ${params.BROWSER} --spec ${params.SPEC}" 
            }
        }
        stage("Deploying") {
            steps {
                echo "Deploy the application"
                // Adăugați pașii de implementare aici
            }
        }
    }
    post {
        always {
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'reports',
                reportFiles: 'index.html',
                reportName: 'My Reports',
                reportTitles: 'The Reports'
            ])
        }
    }
}
