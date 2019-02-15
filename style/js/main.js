// JavaScript Document
var m = false;
		
function Menu() 
{
	if(m)
	{
		document.getElementById('MobMenu').classList.remove('open');
		m = false;
	}
	else
	{
		document.getElementById('MobMenu').classList.add('open');
		m = true;
	}
}