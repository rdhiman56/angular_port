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
            emailext body: 'A Test EMail', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Test'
        }
    }
 }
