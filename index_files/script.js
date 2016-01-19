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
	form.Ce.value = c + mn/20 + ni/15 + (cr + mo + v)/10;
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
	form.Ce.value = c + 2*s + p/3 + (si-0.4)/4 + (mn-0.8)/8 + ni/8 + cu/10 + (cr-0.8)/10;
}

function f3(form)
{
	c = eval(form.C.value);
	mn = eval(form.Mn.value);
	si = eval(form.Si.value);
	ni = eval(form.Ni.value);
	cr = eval(form.Cr.value);
	mo = eval(form.Mo.value);
	v = eval(form.V.value);
	cu = eval(form.Cu.value);
	b = eval(form.B.value);
	form.Ce.value = c + mn/6 + si/24 + ni/10 + cr/5 + mo/4 + v/14 + cu/15 + 5*b;
}

function f4(form)
{
	ce = eval(form.Ce.value);
	form.W.value = 11.414 * Math.pow(ce, -1.4678);
}

function f5(form)
{
	w = eval(form.W.value);
	form.Ce.value = 0.78 - 0.15 * Math.log10(w);
}

function f6(form)
{
	ce = eval(form.Ce.value);
	form.T.value = 550 * Math.sqrt(ce - 0.45);
}

function f7(form)
{
	c = eval(form.C.value);
	d = eval(form.d.value);
	form.C2.value = c*(1+0.005*d);
}

function f8(form)
{
	leom = eval(form.LeOm.value);
	lepr = eval(form.LePr.value);
	lefe = eval(form.LeFe.value);
	y = eval(form.Y.value);
	kpr = eval(form.Kpr.value);
	kpokr = eval(form.Kpokr.value);
	g = eval(form.G.value);
	pfe = eval(form.Pfe.value);
	form.LeSh.value = y*leom + (1-y)*lepr*kpr + g*(1-y)*pfe*lefe*kpokr;
}

function f9(form)
{
	leom = eval(form.LeOm.value);
	lepr = eval(form.LePr.value);
	y = eval(form.Y.value);
	kpr = eval(form.Kpr.value);
	form.LeSh.value = y*leom + (1-y)*lepr*kpr;
}

function f10(form)
{
	g = eval(form.G.value);
	pfe = eval(form.Pfe.value);
	lefe = eval(form.LeFe.value);
	kfl = eval(form.Kfl.value);
	form.LeNm.value = g*pfe*lefe*kfl;
}

function f11(form)
{
	s = eval(form.S.value);
	f = eval(form.F.value);
	form.n.value = s/f;
}

function f12(form)
{
	d = eval(form.d.value);
	form.I.value = (20 + 6*d)*d;
}

function f13(form)
{
	I = eval(form.I.value);
	form.U.value = 20 + 0.04*I;
}

function f14(form)
{
	I = eval(form.I.value);
	a = eval(form.A.value);
	y = eval(form.Y.value);
	f = eval(form.F.value);
	form.V.value = (a*I)/(3600*y*f);
}

function f15(form)
{
	d = eval(form.D.value);
	b = eval(form.B.value);
	form.I.value = (75 * b)/(1.75 - 0.15 * d);
}

function f16(form)
{
	d = eval(form.D.value);
	a = eval(form.A.value);
	form.I.value = (Math.PI * Math.pow(d, 2) * a)/4;
}

function f17(form)
{
	I = eval(form.I.value);
	u = (14 + 0.05*I)
	form.U.value = u + "±1";
}

function f19(form)
{
	r = eval(form.R.value);
	w = eval(form.W.value);
	form.H.value = r*(1-w);
}

function f20(form)
{
	d = eval(form.D.value);
	i = eval(form.I.value);
	form.A.value = 3 + 0.08*i/d;
}

function f21(form)
{
	I = eval(form.I.value);
	a = eval(form.A.value);
	y = eval(form.Y.value);
	d = eval(form.D.value);
	form.V.value = (4*a*I)/(3600*y*Math.PI * Math.pow(d, 2));
}

function f22(form)
{
	e = eval(form.E.value);
	g = eval(form.G.value);
	s = eval(form.S.value);
	b = eval(form.B.value);
	form.A.value = 0.75*e*g+s*b;
}

function f23(form)
{
	h = eval(form.H.value);
	d = eval(form.D.value);
	form.I.value = h*d;
}

function f24(form)
{
	s = eval(form.S.value);
	d = eval(form.D.value);
	form.H.value = s*d;
}

function f25(form)
{
	s = eval(form.S.value);
	d = eval(form.D.value);
	form.H.value = s/2+d;
}

function f26(form)
{
	i = eval(form.I.value);
	j = eval(form.D.value);
	form.D.value = (2*i)/(Math.PI * j);
}

function f27(form)
{
	i = eval(form.I.value);
	a = eval(form.A.value);
	y = eval(form.Y.value);
	sh = eval(form.SH.value);
	form.V.value = (a*i)/(y*sh);
}

function f28(form)
{
	a = eval(form.A.value);
	b = eval(form.B.value);
	d = eval(form.D.value);
	form.K.value = a+b/d;
}

function f29(form)
{
	ash = eval(form.ASH.value);
	vsv = eval(form.VSV.value);
	ae = eval(form.AE.value);
	form.V.value = ash*vsv/ae;
}

function f30(form)
{
	a = eval(form.A.value);
	i = eval(form.I.value);
	d = eval(form.D.value);
	y = eval(form.Y.value);
	form.V.value = (4*a*i)/(y*Math.PI * Math.pow(d, 2));
}