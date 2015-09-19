var Game = (function() {
	var matrix = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0,]];
	var matrix1 = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0,]];
	var score =0;
	var high_score =0;
	var cssMap = {2:'two',4:'four',8:'eight',16:'sixteen'};
	var number = [0,1,2,3];
	var arr =[2,2,2,2,4];
	var spacepresent;
	var spacebefore;

	function myfunction() {
		matrix = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0,]];
		initialise();
		display();
	}

	function moveValid() {
		var count;
		for(var i=0;i<4;i++)
		{
			for(var j=0;j<4;j++)
			{
				if(matrix[i][j]===0)
				{
					count++;
				}
			}
		}

		var count1;
		for(var i=0;i<4;i++)
		{
			for(var j=0;j<4;j++)
			{
				if(matrix1[i][j]===0)
				{
					count1++;
				}
			}
		}

		if(count==count1)
		{
			return false;
		}
		else {
			return true;
		}
	}

	function initialise() {
		var w=0;
		while(w<2)
		{
		var i=Math.floor(Math.random() * (4 - 0)+0);
		var j=Math.floor(Math.random() * (4 - 0)+0);
		var k=Math.floor(Math.random() * (5 - 0)+0);
		matrix[i][j] = arr[k];
		w++;
		}
	}

	function display() {
		var a=1;
		var list = document.getElementsByTagName("p");
		for(var p=0;p<4;p++)
		{
			for(var r=0;r<4;r++)
			{

				
				list[a].innerHTML=matrix1[p][r];
				a++;
				
			}
		}
		a=1;
		for(var p=0;p<4;p++)
		{
			for(var r=0;r<4;r++)
			{

				if(matrix[p][r]!==0)
				{
				list[a].innerHTML=matrix[p][r];
				a++;
				}
				else {
					a++;
				}
			}
		}
	}

	function isSpace() {
		for (var i=0;i<4;i++)
		{
			for(var j=0;j<4;j++)
			{
				if(matrix[i][j]===0)
				{
					return true;
				}
			}
		}

		return false;

	}

	function addNew() {
		var z=0;
		while(z<1)
		{
			var horizontal = Math.floor(Math.random() * (4 - 0)+0);
			var vertical = Math.floor(Math.random() * (4 - 0)+0);
			var x = Math.floor(Math.random() * (3 - 0)+0);
			if(matrix[horizontal][vertical]==0)
			{
				matrix[horizontal][vertical] = arr[x];
				z++;
			}

		}



	}

	function moveLeft() {
		console.log("left");
		for(var i=0;i<4;i++)
				{
					var storage = [0,0,0,0];
					var z=0;
					for(var j=0;j<4;j++)
					{

						if(matrix[i][j]!==0)
						{

							storage[z]=matrix[i][j];
							z++;

						}
					}
					for(z=0;z<4;z++)
					{
						matrix[i][z]=storage[z];
					}


				}

				for(i=0;i<4;i++)
				{
					for(j=0;j<3;j++)
					{
						if(matrix[i][j]===matrix[i][j+1])
						{
							matrix[i][j]=2*matrix[i][j];
							matrix[i][j+1]=0;
						}
					}
				}

				for(i=0;i<4;i++)
				{
					var storage = [0,0,0,0];
					var z=0;
					for(j=0;j<4;j++)
					{

						if(matrix[i][j]!==0)
						{

							storage[z]=matrix[i][j];
							z++;

						}
					}
					for(z=0;z<4;z++)
					{
						matrix[i][z]=storage[z];
					}


				}
				
				
	}

	function moveRight() 
	{
	for(i=0;i<4;i++)
				{
					var newAr = [0,0,0,0];
					var z=3;
					for(j=3;j>=0;j--)
					{

						if(matrix[i][j]!=0)
						{

							newAr[z]=matrix[i][j];
							z--;

						}
					}
					for(z=3;z>=0;z--)
					{
						matrix[i][z]=newAr[z];
					}


				}

				for(i=0;i<4;i++)
				{
					for(j=3;j>=1;j--)
					{
						if(matrix[i][j]===matrix[i][j-1])
						{
							matrix[i][j]=2*matrix[i][j];
							matrix[i][j-1]=0;
						}
					}
				}

				for(i=0;i<4;i++)
				{
					var newAr = [0,0,0,0];
					var z=3;
					for(j=3;j>=0;j--)
					{

						if(matrix[i][j]!=0)
						{

							newAr[z]=matrix[i][j];
							z--;

						}
					}
					for(z=3;z>=0;z--)
					{
						matrix[i][z]=newAr[z];
					}


				}
			}

	function moveUp() {

				for(j=0;j<4;j++)
				{
					var storage = [0,0,0,0];
					var z=0;
					for(i=0;i<4;i++)
					{

						if(matrix[i][j]!=0)
						{

							storage[z]=matrix[i][j];
							z++;

						}
					}
					for(z=0;z<4;z++)
					{
						matrix[z][j]=storage[z];
					}


				}

				for(j=0;j<4;j++)
				{
					for(i=0;i<3;i++)
					{
						if(matrix[i][j]==matrix[i+1][j])
						{
							matrix[i][j]=2*matrix[i][j];
							matrix[i+1][j]=0;
						}
					}
				}

				for(j=0;j<4;j++)
				{
					var storage = [0,0,0,0];
					var z=0;
					for(i=0;i<4;i++)
					{

						if(matrix[i][j]!=0)
						{

							storage[z]=matrix[i][j];
							z++;

						}
					}
					for(z=0;z<4;z++)
					{
						matrix[z][j]=storage[z];
					}


				}
				
				
	}

	function moveDown() {
		for(j=0;j<4;j++)
				{
					var newAr = [0,0,0,0];
					var z=3;
					for(i=3;i>=0;i--)
					{

						if(matrix[i][j]!=0)
						{

							newAr[z]=matrix[i][j];
							z--;

						}
					}
					for(z=3;z>=0;z--)
					{
						matrix[z][j]=newAr[z];
					}


				}

				for(j=0;j<4;j++)
				{
					for(i=3;i>=1;i--)
					{
						if(matrix[i][j]==matrix[i-1][j])
						{
							matrix[i][j]=2*matrix[i][j];
							matrix[i-1][j]=0;
						}
					}
				}

				for(j=0;j<4;j++)
				{
					var newAr = [0,0,0,0];
					var z=3;
					for(i=3;i>=0;i--)
					{

						if(matrix[i][j]!=0)
						{

							newAr[z]=matrix[i][j];
							z--;

						}
					}
					for(z=3;z>=0;z--)
					{
						matrix[z][j]=newAr[z];
					}


				}
				
	} 

	function move(e){

		
		
		if(e.which==37 || e.which==38 || e.which==39 || e.which==40) 
		{
		switch(e.which){
			case 37: console.log("left"); moveLeft();break;
			case 38: moveUp();break;
			case 39: moveRight();break;
			case 40: moveDown();break;
			default: console.log("default");
			}
		display();
		addNew();
 		display();
 		score++;
 	    }
 	    else {
 	    	console.log("Wrong Move! Use Up,Dwon,Right,Left Arrow Keys");
 	    }

 	if(isSpace()==false)
 	prompt("Game over");
 	return;
 
	}

	return {
		init: function() {
			initialise();
			display();
			window.addEventListener('keydown',move);
			document.getElementById("button").addEventListener('click',myfunction);
		}
	};

})();
