pipeline { 
agent any 
    stages { 
        stage ('Build') { 
          steps { 
              echo 'Build Print'
          }
        }
        stage ('Test') { 
        steps { 
               echo 'Test Print'
          }
        }
        stage ('QA') { 
        steps { 
                echo 'QA Print'
          }
         
        }
        stage ('Deploy') { 
        steps { 
                 echo 'Deploy Print'
          }
         
        }
        stage ('Monitor') { 
        steps { 
                  echo 'Monitor Print'
          }
         
        }
 
    }    
  post {
        always {
            emailext 
          subject: "SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
      body: """<p>SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
        <p>Check console output at &QUOT;<a href='${env.BUILD_URL}'>${env.JOB_NAME} [${env.BUILD_NUMBER}]</a>&QUOT;</p>""",
      recipientProviders: [[$class: 'DevelopersRecipientProvider']]
        }
    }
 }
