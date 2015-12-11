$(function () {
	//script for popups
	$('a.show_popup').click(function () {
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

function f1(form)
{
	c = eval(form.C.value);
	mn = eval(form.Mg.value);
	ni = eval(form.Ni.value);
	cr = eval(form.Cr.value);
	mo = eval(form.Mo.value);
	v = eval(form.V.value);
	form.Ce.value = (c + mn/20 + ni/15 + (cr + mo + v)/10)/100;
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
	form.Ce.value = (c + 2*s + p/3 + (si-0.4)/4 + (mn-0.8)/8 + ni/8 + cu/10 + (cr-0.8)/10)/100;
}