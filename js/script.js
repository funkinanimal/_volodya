
//script for popups
$(function () {
	$('a.show_popup').click(function () 
	{
		$('div.'+$(this).attr("rel")).fadeIn(500);
		$("body").append("<div id='overlay'></div>");
		$('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
		return false;				
	});	
	$('a.close').click(function () {
		$(this).parent().fadeOut(100);
		$('#overlay').remove('#overlay');
		return false;
	});	
});	

//scrollup
$(function() 
{
	$(window).scroll(function()
	{
		if($(this).scrollTop() != 0) 
		{
		$('#toTop').fadeIn();
		} 
		else 
		{
		$('#toTop').fadeOut();
		}
	});

	$('#toTop').click(function() 
	{
		$('body,html').animate({scrollTop:0},800);
	});
});

function f1(form)
{
	c = eval(form.C.value);
	mn = eval(form.Mg.value);
	ni = eval(form.Ni.value);
	cr = eval(form.Cr.value);
	mo = eval(form.Mo.value);
	v = eval(form.V.value);
	form.Ce.value = (c + mn/20 + ni/15 + (cr + mo + v)/10;
}

function f2(form)
{
	c = eval(form.C.value);
	s = eval(form.S.value);
	p = eval(form.P.value);
	si = eval(form.Si.value);
	mn = eval(form.Mg.value);
	ni = eval(form.Ni.value);
	cu = eval(form.Cu.value);
	cr = eval(form.Cr.value);
	form.Ce.value = (c + 2*s + p/3 + (si-0.4)/4 + (mn-0.8)/8 + ni/8 + cu/10 + (cr-0.8)/10;
}
function af64(form)
{
	i = eval(form.ips.value);
	f = eval(form.fi.value);
	l = eval(form.la.value);
	tm = eval(form.tm.value);
	tn = eval(form.tnull.value);
	q = eval(form.q.value);
	v = eval(form.V.value);	
	form.Ce.value = -(i/f) * (6.28 * l * Math.pow((tm-tn),2))/(q/v);
}
function af65(form)
{
	f = eval(form.f.value);	
	form.Ce.value = 0.145 + 2.718*(-((1/f)-0.39));
}
function af66(form)
{
	q = eval(form.a.value);
	v = eval(form.b.value);
	d = eval(form.c.value);
	c = eval(form.d.value);
	g = eval(form.e.value);
	tm = eval(form.f.value);
	tn = eval(form.g.value);	
	form.Ce.value = (2*q/v)/(3.14*Math.pow(d,2)*c*g*(tm-tn));
}
function af67(form)
{
	q = eval(form.a.value);
	v = eval(form.b.value);
	f = eval(form.c.value);
	l = eval(form.l.value);	
	tm = eval(form.e.value);
	tn = eval(form.f.value);	
	form.Ce.value = f*((q/v)/(l*(tm-tn)));
}

function af68(form)
{
	t = eval(form.a.value);
	tm = eval(form.b.value);
	tn = eval(form.c.value);
		
	form.Ce.value = (t-tn)/(tm-tn);
}
function af69(form)
{
	t = eval(form.a.value);		
	form.Ce.value = 0.181*Math.pow(t,-1)-0.144;
}
function af70(form)
{
	tn = eval(form.a.value);
	tz = eval(form.b.value);
	tv = eval(form.c.value);
	to = eval(form.l.value);		
	form.Ce.value = tn+tz+tv+to;
}
function af71(form)
{
	m = eval(form.a.value);
	a = eval(form.b.value);
	i = eval(form.c.value);			
	form.Ce.value = m/(a*i);
}
function af72(form)
{
	m = eval(form.a.value);
	a = eval(form.b.value);
	i = eval(form.c.value);			
	form.Ce.value = m*a*i;
}
function af73(form)
{
	a = eval(form.b.value);
	i = eval(form.c.value);			
	form.Ce.value = i/a;
}
function af75(form)
{
	tn = eval(form.a.value);
	tz = eval(form.b.value);
	tv = eval(form.c.value);
	to = eval(form.d.value);		
	form.Ce.value = tn+tz+tv+to;
}
function af78(form)
{
	m = eval(form.a.value);
	a = eval(form.b.value);
	i = eval(form.c.value);			
	form.Ce.value = m*a*i;

function af79(form)
{
	m = eval(form.a.value);
	a = eval(form.b.value);
				
	form.Ce.value = m*a;
}
function af80(form)
{
	m = eval(form.a.value);
	a = eval(form.b.value);
				
	form.Ce.value = (m+1)*a;
}
function af81(form)
{
	m = eval(form.a.value);
	a = eval(form.b.value);
				
	form.Ce.value = m*a;
}
function af84(form)
{	
	a = eval(form.b.value);
				
	form.Ce.value = 1.5*a;
}
function af85(form)
{
	m = eval(form.a.value);
	a = eval(form.b.value);
				
	form.Ce.value = m*a;
}
function af86(form)
{
	tn = eval(form.a.value);
	tz = eval(form.b.value);
	tv = eval(form.c.value);
	to = eval(form.d.value);
	ro = eval(form.d.value);		
	form.Ce.value = (tn*tv+tz*to)*ro;
}
function af87(form)
{
	m = eval(form.a.value);
	a = eval(form.b.value);
				
	form.Ce.value = (m*a)/60;
}
function af88(form)
{
	a = eval(form.a.value);
	b = eval(form.b.value);
	c = eval(form.c.value);
			
	form.Ce.value = a/(b*c);
}
function af89(form)
{
	m = eval(form.a.value);
	a = eval(form.b.value);
				
	form.Ce.value = m*a;
}
function af90(form)
{
	m = eval(form.a.value);
	a = eval(form.b.value);
				
	form.Ce.value = m/a;
}
function af91(form)
{
	m = eval(form.a.value);
	a = eval(form.b.value);
				
	form.Ce.value = m/a;
}
function af92(form)
{
	m = eval(form.a.value);
	a = eval(form.b.value);
	c = eval(form.c.value);			
	form.Ce.value = m/(a*c);
}
function af93(form)
{
	m = eval(form.a.value);
	a = eval(form.b.value);
				
	form.Ce.value = m*a;
}
function af94(form)
{
	m = eval(form.a.value);
	a = eval(form.b.value);
				
	form.Ce.value = m/a;
}