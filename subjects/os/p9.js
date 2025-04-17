// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `

//sujal
sudo apt install gcc
cd path
gcc fork.c -o fork
./fork

#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>

int main(){
    fork();
    fork();
    fork();
    fork();

    printf("HELlo there from FORK() function!! \nPID=%d\n", getpid());

    return 0;
}

//exec
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
    printf("PID of exec1.c = %d\n", getpid());
    
    char *args[] = {"Hello", "there", "from EXEC() function", NULL};
    execv("./ex2", args);

    return 0;
}

#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
    printf("We are in exec2.c\n");
    printf("PID of exec2.c = %d\n", getpid());
    return 0;
}

gcc exec2.c -o ex2
gcc exec1.c -o ex1
./ex1


//other
//FORK


  #include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/wait.h>

int main()
{
    pid_t pid;

    printf("Parent process started. PID: %d\n", getpid());

    
    pid = fork();
    
    if (pid < 0)
    {
        
        perror("fork failed");
        exit(1);
    }
    else if (pid == 0)
    {
        
        printf("Child process created. PID: %d\n", getpid());

        
        execlp("date", "date", NULL);
        

        
        perror("execlp failed");
        exit(1);
    }
    else
    {
        wait(NULL);
        printf("Child process completed. Parent exiting.\n");
    }

    return 0;
}`;
  res.json({ code: codeString });
});

module.exports = router;
