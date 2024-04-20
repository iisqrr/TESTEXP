    // Array of video sources with start and end times for the play/pause button
    function hidefirstscreen(){
      document.getElementById("firstimg").style.display = "none"
      document.getElementById("firstbtn").style.display = "none"
      document.getElementById("firstbutton").style.display = "none"
      document.getElementById("firstscreen").style.display = "none"
      alert("First, press the on button of the weighing machine, and other steps will be proceeded, on clicking button one by one.")

     
    }
      var videoSources = [

        "Experiment no1 .2_10.mp4",
        "vo2.mp4",
        "Experiment no1 .2_8.mp4",
        "vo3.mp4",
        "vo6.mp4",
        "vo4.mp4",
        "7th part.mp4",
        "2",
        "3",
        "8thpart.mp4",
        "9thpart.mp4",
        "10thpart.mp4",
        "11thpart.mp4",
        "12thpart.mp4",
        "4"
      ];
      var currentVideoIndex = 0;
       
      // Getting the modal menu
      var modal = document.getElementById("menublockitem");

      // Get the video element
      var myVideo = document.getElementById("myVideo");

      // Get the play/pause button
      var playButton = document.getElementById("play-button");
      // get the new start button
      // var playatbutton = document.getElementById("play-at-button");

      var thirdbtn1 = document.getElementById("thirdbtn");
      
      
      function nextVideo() {
        
        currentVideoIndex++;
        currentVideoIndex <= videoSources.length;
        // Set the new video source
        myVideo.src = videoSources[currentVideoIndex];

        // Pause the video
        switch (currentVideoIndex) {
          case 0:
            modal.style.display = "none";
          case 1:
            let step1CompletedParagraph = document.createElement("p");
            step1CompletedParagraph.textContent = "Step 1 is completed";
            modal.appendChild(step1CompletedParagraph);
            break;
          case 2:
            let step2CompletedParagraph = document.createElement("p");
            step2CompletedParagraph.textContent = "Step 2 is completed";
            modal.appendChild(step2CompletedParagraph);
            break;
          case 3:
            let step3CompletedParagraph = document.createElement("p");
            step3CompletedParagraph.textContent = "Step 3 is completed";
            modal.appendChild(step3CompletedParagraph);
            break;
          case 4:
            let step4CompletedParagraph = document.createElement("p");
            step4CompletedParagraph.textContent = "Step 4 is completed";
            modal.appendChild(step4CompletedParagraph);
            break;
          case 5:
            let step5CompletedParagraph = document.createElement("p");
            step5CompletedParagraph.textContent = "Step 5 is completed";
            modal.appendChild(step5CompletedParagraph);
            break;
            case 6:
            let step5CompletedParagraph2 = document.createElement("p");
                step5CompletedParagraph2.textContent = "Step 6 is completed";
                modal.appendChild(step5CompletedParagraph2);
              break;
              case 7:
                
                let step6CompletedParagraph = document.createElement("p");
              step6CompletedParagraph.textContent = "Step 7 is completed";
              modal.appendChild(step6CompletedParagraph);
              // let step6CompletedParagraph1 = document.createElement("p");
              // step6CompletedParagraph1.innerHTML = "<p> -AL STEPS COMPLETED-</p>";
              // modal.appendChild(step6CompletedParagraph1);
              // alert("All Steps Completed")
                break;
                case 9:
                  let step7CompletedParagraph = document.createElement("p");
                  step7CompletedParagraph.textContent = "Step 8 is completed";
                  modal.appendChild(step7CompletedParagraph);
                  break;
                case 10:
                  let step8CompletedParagraph = document.createElement("p");
                  step8CompletedParagraph.textContent = "Step 9 is completed";
                  modal.appendChild(step8CompletedParagraph);
                  break;
                case 11:
                  let step9CompletedParagraph = document.createElement("p");
                  step9CompletedParagraph.textContent = "Step 10 is completed";
                  modal.appendChild(step9CompletedParagraph);
                  break;
                case 12:
                  let step10CompletedParagraph = document.createElement("p");
                  step10CompletedParagraph.textContent = "Step 11 is completed";
                  modal.appendChild(step10CompletedParagraph);
                  break;
                case 13:
                  let step11CompletedParagraph = document.createElement("p");
                  step11CompletedParagraph.textContent = "Step 12 is completed";
                  modal.appendChild(step11CompletedParagraph);
                  alert("All Steps are Completed");
                  let step12CompletedParagraph = document.createElement("p");
                  step12CompletedParagraph.textContent = "All Steps Completed!";
                  modal.appendChild(step12CompletedParagraph);

                  break;
          
        }
    
        // Set the default values for the start and end time input fields
        document.getElementById("start-time").value ===
          videoSources[currentVideoIndex].startTime;
        document.getElementById("end-time").value ===
          videoSources[currentVideoIndex].endTime;

         if (currentVideoIndex === 1) {
          playButton.style.bottom = "16%";
          playButton.style.left = "42.8%";
        
          playButton.textContent = "Pour into conical flask"
          
          
        } else if (currentVideoIndex === 2) {
          playButton.style.bottom = "18%";
          playButton.style.left = "61.9%";
          playButton.textContent = "Add 2 drops Indicator"
          document.getElementById("tare").style.display = "none";

        } else if (currentVideoIndex === 3) {
          playButton.style.bottom = "15%";
          playButton.style.left = "54.9%";
          playButton.textContent = "Add to Volumetric flask"
        }      
         else if (currentVideoIndex === 4) {
          playButton.style.bottom = "16%";
          playButton.style.left = "65.9%";
          playButton.textContent = "Put into 100ml Flask"
        }      
         else if (currentVideoIndex === 5) {
          playButton.style.bottom = "16%";
          playButton.style.left = "49%";
          playButton.textContent = "Take 5ml Fehl.B"
        }      
         else if (currentVideoIndex === 6) {
          playButton.style.bottom = "17%";
          playButton.style.left = "24%";
          playButton.textContent = "Put flask on heater"
        }      
        else if(currentVideoIndex === 7){
          playButton.style.display = "none"
        }
         else if (currentVideoIndex === 9) {
          playButton.style.bottom = "39%";
          playButton.style.left = "67%";
          playButton.textContent = "Weigh 2.5gm Starch"
        }      
         else if (currentVideoIndex === 10) {
          playButton.style.bottom = "16%";
          playButton.style.left = "58%";
          
          playButton.textContent = "Fill Other Two Flasks"
        }      
         else if (currentVideoIndex === 11) {
          playButton.style.bottom = "17%";
          playButton.style.left = "58%";
          playButton.textContent = "Fill Other Two Flasks"
        }      
         else if (currentVideoIndex === 12) {
          playButton.style.bottom = "17%";
          playButton.style.left = "24%";
          playButton.textContent = "Put flask on heater"
        }      
         else if (currentVideoIndex === 13) {
          playButton.style.bottom = "37%";
          playButton.style.left = "59%";
          playButton.textContent = "Titrate other two"
        }      
                                                       
        
        

        // third button ki position and naming                     
        if (currentVideoIndex === 0) {
          thirdbtn1.style.bottom = "10%";
          thirdbtn1.style.left = "50%";
          thirdbtn1.textContent = "Turn On Weighing Machine";
          }
      else if(currentVideoIndex === 1){
        thirdbtn1.style.top = "78%";
          thirdbtn1.style.left = "27.5%";
          thirdbtn1.textContent = "Take 5ml Conc. HCL";
          // thirdbtn1.style.display = "none"
          
        } else if(currentVideoIndex === 2){
        // thirdbtn1.style.display = "none"
        thirdbtn1.style.top = "75%";
          thirdbtn1.style.left = "63%";
          thirdbtn1.textContent = "Titrate the Solution";
          
      }
       else if(currentVideoIndex === 3){
        thirdbtn1.style.top = "79%";
          thirdbtn1.style.left = "57%";
          thirdbtn1.textContent = "Add 500ml Water";

          
      }
       else if(currentVideoIndex === 4){
        thirdbtn1.style.top = "77%";
          thirdbtn1.style.left = "25.8%";
          thirdbtn1.textContent = "Add Water";
          
      }
       else if(currentVideoIndex === 5){
        thirdbtn1.style.top = "76%";
          thirdbtn1.style.left = "59%";
          thirdbtn1.textContent = "Add 10ml Water";
          
      }
       else if(currentVideoIndex === 6){
        thirdbtn1.style.top = "63%";
          thirdbtn1.style.left = "27%";
          thirdbtn1.textContent = "Titrate the mixture";
          
          
      }
      else if(currentVideoIndex === 7){
       thirdbtn1.style.display = "none"
      }
       else if(currentVideoIndex === 9){
        thirdbtn1.style.top = "54%";
          thirdbtn1.style.left = "77%";
          thirdbtn1.textContent = "Make It 500ml Soln.";
          
          
      }
       else if(currentVideoIndex === 10){
        thirdbtn1.style.top = "56%";
          thirdbtn1.style.left = "76%";
          thirdbtn1.textContent = "Fill Remaining Three";
        }
       else if(currentVideoIndex === 11){
        thirdbtn1.style.top = "56%";
          thirdbtn1.style.left = "73%";
          thirdbtn1.textContent = "Fill Remaining flasks";
        }
       else if(currentVideoIndex === 12){
        thirdbtn1.style.top = "71%";
          thirdbtn1.style.left = "22%";
          thirdbtn1.textContent = "Click For Next Step";
          thirdbtn1.style.display = "flex"
        }
       else if(currentVideoIndex === 13){
        thirdbtn1.style.top = "56%";
          thirdbtn1.style.left = "71%";
          thirdbtn1.textContent = "Titrate Remaining Flasks";
          thirdbtn1.style.display = "none"
          
        }
          
          

        // Set the position of the "Play at Time" button
        var playAtButton = document.getElementById("play-at-button");

        if (currentVideoIndex === 0) {
          playAtButton.style.bottom = "10%";
          playAtButton.style.left = "50%";
          playAtButton.textContent = "Turn On Weighing Machine";
          
          
          
          
          
        } else if (currentVideoIndex === 1) {
          playAtButton.style.bottom = "18%";
          playAtButton.style.left = "55%";
          playAtButton.textContent = "Take 50ml Distilled Water";
          playAtButton.style.display = "flex"
          // playAtButton.style.zIndex = 1
          // playButton.style.zIndex = +1
          document.getElementById("tare").style.display = "none"
          document.getElementById("onbtn").style.display = "none"
          document.getElementById("tare").style.zIndex = -1;
          
          
          
          
        }   
        
        
        else if (currentVideoIndex === 2) {
           document.getElementById("tare").style.display = "none"
          playAtButton.style.bottom = "19%";
          playAtButton.style.left = "49%";
          playAtButton.textContent = "Fill NaOH in Burette";
          playAtButton.style.display = "flex"

          
        } 
          
        
         else if (currentVideoIndex === 3) {
          playAtButton.style.bottom = "34%";
          playAtButton.style.left = "36%";
          playAtButton.textContent = "Take Titrated solution";
          playAtButton.style.display = "flex"

        }
         else if (currentVideoIndex === 4) {
          playAtButton.style.bottom = "17%";
          playAtButton.style.left = "35%";
          playAtButton.textContent = "Take 25ml Solution";
          playAtButton.style.display = "flex"

        }
         else if (currentVideoIndex === 5) {
          playAtButton.style.bottom = "18%";
          playAtButton.style.left = "38%";
          playAtButton.textContent = "Take 5ml Fehl.A";
          playAtButton.style.display = "flex"

        }
         else if (currentVideoIndex === 6) {
          playAtButton.style.bottom = "23%";
          playAtButton.style.left = "76%";
          playAtButton.textContent = "Fill Fehl. soln. in Burette";
          playAtButton.style.display = "flex"

        }
        else if(currentVideoIndex === 7){
          document.getElementById("screen7").style.display = "flex"
          document.getElementById("screen7img").style.display = "flex"
          document.getElementById("screen7button").style.display = "flex"
          document.getElementById("screen7btn").style.display = "flex"
          document.getElementById("midcontent").style.display = "none"
          document.getElementById("play-button").style.display = "none"
          document.getElementById("sidemenublock1").style.display = "none"
          playAtButton.style.display = "none"
        }
         else if (currentVideoIndex === 9) {
          playAtButton.style.bottom = "29%";
          playAtButton.style.left = "55.5%";
          playAtButton.textContent = "Weigh Petri Dish";
          playAtButton.style.display = "none"
          document.getElementById("tare").style.display = "flex"
          document.getElementById("onbtn").style.display = "flex"

        }
         else if (currentVideoIndex === 10) {
          playAtButton.style.bottom = "42%";
          playAtButton.style.left = "29%";
          playAtButton.textContent = "Fill two flasks with Soln.";
          playAtButton.style.display = "flex"
          document.getElementById("tare").style.display = "none";
          document.getElementById("onbtn").style.display = "none";
          
        }
         else if (currentVideoIndex === 11) {
          playAtButton.style.bottom = "17%";
          playAtButton.style.left = "42%";
          playAtButton.textContent = "Add 5ml in two flasks";
          playAtButton.style.display = "flex"
        }
         else if (currentVideoIndex === 12) {
          playAtButton.style.bottom = "23%";
          playAtButton.style.left = "76%";
          playAtButton.textContent = "Fill Fehl. soln. in Burette";
          playAtButton.style.display = "none"
        }
         else if (currentVideoIndex === 13) {
          playAtButton.style.bottom = "18%";
          playAtButton.style.left = "24%";
          playAtButton.textContent = "Titrate two Flasks";
          playAtButton.style.display = "flex"
        }  
        var onbtn1 = document.getElementById("onbtn");    
        if(currentVideoIndex === 8){
          onbtn1.style.top = "81%";
          onbtn1.style.left = "43.2%";
          onbtn1.style.height =  "3vh";
        onbtn1.style.width =  "1vw";
          // onbtn1.style.display = "flex"
        }
        var tare1 = document.getElementById("tare")
        if(currentVideoIndex === 8){
          tare1.style.top = "80.5%";
        tare1.style.left = "48%";
        }
          


         
      
        // Set the default values for the start and end time input fields
        if (currentVideoIndex === 0) {
          document.getElementById("start-time").value = "0.1";    //0.1
          document.getElementById("end-time").value = "3";    // 0.3
          // document.getElementById("start-time1").value = "3";
          // document.getElementById("end-time1").value = "7";

        } else if (currentVideoIndex === 1) {
          document.getElementById("start-time").value = "0.1";
          document.getElementById("end-time").value = "7";
        } else if (currentVideoIndex === 2) {
          document.getElementById("start-time").value = "0.1";  //0
          document.getElementById("end-time").value = "7";  // 3
        }
         else if (currentVideoIndex === 3) {
          document.getElementById("start-time").value = "0.1";
          document.getElementById("end-time").value = "1.3";
        }
         else if (currentVideoIndex === 4) {
          document.getElementById("start-time").value = "0.1";
          document.getElementById("end-time").value = "1.5";
        }
         else if (currentVideoIndex === 5) {
          document.getElementById("start-time").value = "0.1";
          document.getElementById("end-time").value = "8.8";
        }
         else if (currentVideoIndex === 6) {
          document.getElementById("start-time").value = "0.1";
          document.getElementById("end-time").value = "7";
        }
        else if(currentVideoIndex === 7){
          document.getElementById("start-time").value = "0.1";
          document.getElementById("end-time").value = "4.6";
        }
         else if (currentVideoIndex === 9) {
          document.getElementById("start-time").value = "0.1";
          document.getElementById("end-time").value = "4.6";
        }
         else if (currentVideoIndex === 10) {
          document.getElementById("start-time").value = "0.1";
          document.getElementById("end-time").value = "16.5";
        }
         else if (currentVideoIndex === 11) {
          document.getElementById("start-time").value = "0.1";
          document.getElementById("end-time").value = "13";
        }
         else if (currentVideoIndex === 12) {
          document.getElementById("start-time").value = "0.1";
          document.getElementById("end-time").value = "7";
        } 
         else if (currentVideoIndex === 13) {
          document.getElementById("start-time").value = "0.3";
          document.getElementById("end-time").value = "10";
        }
         
        

        
      document.getElementById("start-time1").value ===
          videoSources[currentVideoIndex].startTime1;
        document.getElementById("end-time1").value ===
          videoSources[currentVideoIndex].endTime1;

        if (currentVideoIndex === 0) {
          document.getElementById("start-time1").value = "3.1";    //0.1
          document.getElementById("end-time1").value = "12";

      }else if(currentVideoIndex === 1){
        document.getElementById("start-time1").value = "7.1";    //0.1
          document.getElementById("end-time1").value = "15.1";
      }else if (currentVideoIndex === 2) {
          document.getElementById("start-time1").value = "7.1";    //0.1
          document.getElementById("end-time1").value = "18.6";

      }
      else if (currentVideoIndex === 3) {
          document.getElementById("start-time1").value = "1.3";    //0.1
          document.getElementById("end-time1").value = "4.1";

      }
      else if (currentVideoIndex === 4) {
          document.getElementById("start-time1").value = "1.6";    //0.1
          document.getElementById("end-time1").value = "4";

      }
      else if (currentVideoIndex === 5) {
          document.getElementById("start-time1").value = "8.9";    //0.1
          document.getElementById("end-time1").value = "15";

      }
      else if (currentVideoIndex === 6) {
          document.getElementById("start-time1").value = "7.1";
          document.getElementById("end-time1").value = "11";
        }
      else if (currentVideoIndex === 7) {
          document.getElementById("start-time1").value = "7.1";
          document.getElementById("end-time1").value = "11";
        }
      else if (currentVideoIndex === 9) {
          document.getElementById("start-time1").value = "8.1";
          document.getElementById("end-time1").value = "21";
        }
      else if (currentVideoIndex === 10) {
          document.getElementById("start-time1").value = "16.6";
          document.getElementById("end-time1").value = "34.6";
        }
      else if (currentVideoIndex === 11) {
          document.getElementById("start-time1").value = "13.1";
          document.getElementById("end-time1").value = "25";
        }
      else if (currentVideoIndex === 12) {
          document.getElementById("start-time1").value = "7.1";
          document.getElementById("end-time1").value = "10";
        }
      else if (currentVideoIndex === 13) {
          document.getElementById("start-time1").value = "10.6";
          document.getElementById("end-time1").value = "19";
        }
         
          document.getElementById("start-time2").value ===
          videoSources[currentVideoIndex].startTime2;
        document.getElementById("end-time2").value ===
          videoSources[currentVideoIndex].endTime2;

          if (currentVideoIndex === 0) {
          document.getElementById("start-time2").value = "3.1";    
          document.getElementById("end-time2").value = "6";
        }
          if (currentVideoIndex === 9) {
          document.getElementById("start-time2").value = "0.1";              
          document.getElementById("end-time2").value = "0.8";          
        }     
                     

      // thrid button ke kaam yha honge

      document.getElementById("start-time3").value ===
          videoSources[currentVideoIndex].startTime3;
        document.getElementById("end-time3").value ===
          videoSources[currentVideoIndex].endTime3;

          if (currentVideoIndex === 0) {
          document.getElementById("start-time3").value = "3.1";    //0.1
          document.getElementById("end-time3").value = "6";
        
      }
       else if (currentVideoIndex === 9) {
          document.getElementById("start-time3").value = "4.7";    //0.1
          document.getElementById("end-time3").value = "8";
        
      }
      
      // fourth button ka kaam poora
          document.getElementById("start-time4").value ===
          videoSources[currentVideoIndex].startTime4;
        document.getElementById("end-time4").value ===
          videoSources[currentVideoIndex].endTime4;

          if (currentVideoIndex === 0) {
          document.getElementById("start-time4").value = "8.1";    //0.1
          document.getElementById("end-time4").value = "14";

      }else if (currentVideoIndex === 1) {
          document.getElementById("start-time4").value = "15.2";    //0.1
          document.getElementById("end-time4").value = "21";

      }else if (currentVideoIndex === 2) {
          document.getElementById("start-time4").value = "18.7";   //0.1
          document.getElementById("end-time4").value = "27";

      }else if (currentVideoIndex === 3) {
          document.getElementById("start-time4").value = "3.3";    //0.1
          document.getElementById("end-time4").value = "10";

      }
      else if (currentVideoIndex === 4) {
          document.getElementById("start-time4").value = "4.1";    //0.1
          document.getElementById("end-time4").value = "10";

      }
      else if (currentVideoIndex === 5) {
          document.getElementById("start-time4").value = "15.1";    //0.1
          document.getElementById("end-time4").value = "20";
      }
      else if (currentVideoIndex === 6) {
          document.getElementById("start-time4").value = "11.1";
          document.getElementById("end-time4").value = "16";
      }
      else if (currentVideoIndex === 7) {
          document.getElementById("start-time4").value = "11.1";
          document.getElementById("end-time4").value = "16";
      }
      else if (currentVideoIndex === 9) {
          document.getElementById("start-time4").value = "21.2";
          document.getElementById("end-time4").value = "34";
      }
      else if (currentVideoIndex === 10) {
          document.getElementById("start-time4").value = "34.7";
          document.getElementById("end-time4").value = "61";
      }
      else if (currentVideoIndex === 11) {
          document.getElementById("start-time4").value = "25.1";
          document.getElementById("end-time4").value = "43";
      }
      else if (currentVideoIndex === 12) {
          document.getElementById("start-time4").value = "13.1";
          document.getElementById("end-time4").value = "17";
      }
      else if (currentVideoIndex === 13) {
          document.getElementById("start-time4").value = "19.4";
          document.getElementById("end-time4").value = "36";
      }
     
    
      if(currentVideoIndex === 8){
        document.getElementById("midcontent").style.display = "flex"
        document.getElementById("play-at-button").style.display = "flex"
        document.getElementById("sidemenublock1").style.display = "flex"
      }
      if(currentVideoIndex === 14){
        document.getElementById("midcontent").style.display = "none"
        document.getElementById("play-at-button").style.display = "none"
        document.getElementById("play-button").style.display = "none"

        document.getElementById("sidemenublock1").style.display = "none"
        document.getElementById("finalcal").style.display = "flex"
        document.getElementById("calimg").style.display = "flex"
        document.getElementById("refbut").style.display = "flex"
        document.getElementById("refresh").style.display = "flex"
      }
      
          
      
    
          
         

    
    
    }
    function further(){
      // currentVideoIndex += 1;
      document.getElementById("screen7").style.display = "none"
      document.getElementById("screen7img").style.display = "none"
      document.getElementById("screen7btn").style.display = "none"
      document.getElementById("screen7button").style.display = "none"
    }
      

      // Function to play the video at a specified time range
      function playAtSpecifiedTime() {
        // Get the start and end times from the input fields
        var startTime = document.getElementById("start-time").value;
        var endTime = document.getElementById("end-time").value;
        
         
        // Make sure the start and end times are numbers
        // if (isNaN(startTime) || isNaN(endTime)) {
        //   alert("Invalid time. Please enter a number.");
        //   return;
        // }
       
        // Set the video time to the start time and play
        myVideo.currentTime = startTime;
        myVideo.play();

        // Pause the video at the end time
        myVideo.ontimeupdate = function () {
          if (myVideo.currentTime >= endTime) {
            myVideo.pause();
            myVideo.ontimeupdate = null;
          }
        };
      }


      // copied version pe kaam kr rha main
      function playAtSpecifiedTime1() {
        // Get the start and end times from the input fields
        var startTime1 = document.getElementById("start-time1").value;
        var endTime1 = document.getElementById("end-time1").value;

        myVideo.currentTime = startTime1;
        myVideo.play();

        // Pause the video at the end time
        myVideo.ontimeupdate = function () {
          if (myVideo.currentTime >= endTime1) {
            myVideo.pause();
            myVideo.ontimeupdate = null;
          }
        };
      }

      function onbtn() {
        // Get the start and end times from the input fields
        var startTime2 = document.getElementById("start-time2").value;
        var endTime2 = document.getElementById("end-time2").value;

        myVideo.currentTime = startTime2;
        myVideo.play();

        // Pause the video at the end time
        myVideo.ontimeupdate = function () {
          if (myVideo.currentTime >= endTime2) {
            myVideo.pause();
            myVideo.ontimeupdate = null;
          }
        };
      }
      function thirdbtn() {
        // Get the start and end times from the input fields
        var startTime3 = document.getElementById("start-time3").value;
        var endTime3 = document.getElementById("end-time3").value;

        myVideo.currentTime = startTime3;
        myVideo.play();

        // Pause the video at the end time
        myVideo.ontimeupdate = function () {
          if (myVideo.currentTime >= endTime3) {
            myVideo.pause();
            myVideo.ontimeupdate = null;
          }
        };
      } 
      function fourthbtn() {
        // Get the start and end times from the input fields
        var startTime4 = document.getElementById("start-time4").value;
        var endTime4 = document.getElementById("end-time4").value;

        myVideo.currentTime = startTime4;
        myVideo.play();

        // Pause the video at the end time
        myVideo.ontimeupdate = function () {
          if (myVideo.currentTime >= endTime4) {
            myVideo.pause();
            myVideo.ontimeupdate = null;
          } 
        };
      } 

      function playbtn1z(){
        document.getElementById("play-button").style.zIndex = 1;
      }
        function closenextbtn(){
          document.getElementById("next-button").style.display = "none"
        }
      
      function closeplayatbutton(playatbutton) {
        setTimeout(function() {
          document.getElementById("play-at-button").style.display = "none";
          // playatbutton.style.display = "none";
        },200)
      }
      function closeplaybutton(playatbutton) {
        setTimeout(function() {
          document.getElementById("play-button").style.display = "none";
          document.getElementById("play-button").style.zIndex = -1
          // playatbutton.style.display = "none";
        },200)
      }
      function closetarebtn() {
        setTimeout(function() {
          document.getElementById("tare").style.display = "none";
          // playatbutton.style.display = "none";
        },200)
      }
     function closeonbtn() {
      setTimeout(function() {
          document.getElementById("onbtn").style.display = "none";
          // playatbutton.style.display = "none";
        },200)
      }
      function closethirdbtn(){
        setTimeout(function() {
            document.getElementById("thirdbtn").style.display = "none";
            // playatbutton.style.display = "none";
          },200)
        
      }
     
      function calshow(){
        document.getElementById("calimg").style.display = "flex"
        document.getElementById("refresh").style.display = "flex"
        document.getElementById("refbut").style.display = "flex"
        document.getElementById("calimg").style.zIndex = 1;
        document.getElementById("ctra").style.display = "none"
        document.getElementById("ctr").style.display = "none"
      }
    



      function showbtn() {
        document.getElementById("play-at-button").style.display = "flex"
        document.getElementById("play-at-button").style.zIndex = "1"

      }

      function showplaybtn() {
        document.getElementById("play-button").style.display = "flex"
        document.getElementById("play-button").style.zIndex = 1;
        
      
      }
      // console.log("ani")
      function showtare(){
        document.getElementById("tare").style.display = "flex"
        document.getElementById("tare").style.zIndex = 1;
      }
      function showthirdbtn() {
        document.getElementById("thirdbtn").style.display = "flex"
      }
      function shownextbtn(){
        document.getElementById("next-button").style.display = "flex"
      }
      


      function showSidemenublock() {
        const sidebar = document.querySelector(".sidemenublock");
        sidebar.style.display = "flex";
      }
      function closesidemenublock() {
        const sidebar1 = document.querySelector(".sidemenublock");
        sidebar1.style.display = "none";
      }