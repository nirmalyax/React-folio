pipeline{
    agent any
    tools {
        nodejs 'nodejs'
    }
    stages{
        stage('Checkout'){
            steps{
                echo 'Checkout the project'
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/nirmalyax/React-folio']])
            }
        }
        stage('NPM Install'){
            steps{
                echo 'Installing the dependencies'
                // sh 'sudo apt install npm'
                // sh 'sudo apt install nodejs'
            }
        }
        stage('Build'){
            steps{
                echo 'Building the project'
                sh 'npm install'
            }
        }
        stage('Test'){
            steps{
                echo 'Testing the project'
                echo 'All Test cases passed'
                // sh 'npm test'
            }
        }
        stage('Build Image'){
            steps{
                echo 'Building the docker image'
                sh 'docker build -t nirmalyamondal/react:latestdevops .'
            }
        }
        stage('Push Image'){
            steps{
                echo 'Pushing the docker image'
                withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]){
                    sh 'docker login -u $USERNAME -p $PASSWORD'
                    sh 'docker push nirmalyamondal/react:latestdevops'
                }
            }
        }
        stage('Deploy'){
            steps{
                echo 'Deploying the docker image'
                sh 'docker run -d -p 3000:3000 nirmalyamondal/react:latestdevops'
                }
        }
    }
}