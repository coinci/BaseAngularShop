pipeline {
    agent { 
        docker { image 'node:20.17.0' }
    }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}