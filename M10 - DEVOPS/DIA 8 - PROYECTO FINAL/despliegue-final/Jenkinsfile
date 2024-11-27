pipeline {
      agent any

      stages {
          stage('Checkout') {
              steps {
                  checkout scm
              }
          }

          stage('Build Docker Image') {
              steps {
                  script {
                      docker.build("carrito-productos:${env.BUILD_ID}")
                  }
              }
          }

          stage('Deploy') {
              steps {
                  withCredentials([string(credentialsId: 'vercel_token', variable: 'VERCEL_TOKEN')]) {
                      sh 'npx vercel --prod --token $VERCEL_TOKEN'
                  }
              }
          }
      }
  }