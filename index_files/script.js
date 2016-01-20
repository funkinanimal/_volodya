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

function f01(form)
{
	c = eval(form.C.value);
	s = eval(form.S.value);
	p = eval(form.P.value);
	si = eval(form.Si.value);
	ni = eval(form.Ni.value);
	mn = eval(form.Mn.value);
	cr = eval(form.Cr.value);
	mo = eval(form.Mo.value);
	v = eval(form.V.value);
	form.HCS.value = (c*(s+p+0.04*si+0.01*ni)*1000)/(3*mn+cr+mo+v);
}

function f02(form)
{
	c = eval(form.C.value);
	s = eval(form.S.value);
	p = eval(form.P.value);
	nb = eval(form.Nb.value);
	si = eval(form.Si.value);
	mn = eval(form.Mn.value);
	form.UCS.value = 230*c+190*s+75*p+45*nb-12.3*si-5.4*mn-1;
}

function f03(form)
{
	c = eval(form.C.value);
	s = eval(form.S.value);
	si = eval(form.Si.value);
	mo = eval(form.Mo.value);
	mn = eval(form.Mn.value);
	form.V.value = 19-42*c-411*s-3.3*si+5.6*mn+6.7*mo;
}

function f04(form)
{
	cr = eval(form.Cr.value);
	mo = eval(form.Mo.value);
	si = eval(form.Si.value);
	nb = eval(form.Nb.value);
	ti = eval(form.Ti.value);
	ni = eval(form.Ni.value);
	mn = eval(form.Mn.value);
	c = eval(form.C.value);
	n = eval(form.N.value);
	cu = eval(form.Cu.value);

	form.CN.value = (cr+1.37*mo+1.5*si+2*nb+3*ti)/(ni+0.31*mn+22*c+14.2*n+cu);
}

function f05(form)
{
	c = eval(form.C.value);
	ni = eval(form.Ni.value);
	nb = eval(form.Nb.value);
	d = eval(form.D.value);
	fe = eval(form.Fe.value);
	form.L.value = 299*c+8*ni+142*nb-5.5*Math.pow((d-fe), 2);
}


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

function f31a(form)
{
	k = eval(form.K.value);
	q = eval(form.Q.value);
	form.A.value = Math.pow(k, 2)/2 + 1.05*k*q;
}

function f31b(form)
{
	k = eval(form.K.value);
	form.Q.value = 0.3*k;
}

function f32(form)
{
	d = eval(form.D.value);
	p = eval(form.P.value);
	form.I.value = Math.PI * Math.pow(d, 2) * p / 4;
}

function f33(form)
{
	q = eval(form.Q.value);
	c = eval(form.C.value);
	b = eval(form.B.value);
	v = eval(form.V.value);
	y = eval(form.Y.value);
	form.T.value = (0.242*q)/(v*c*b*y);
}

function f34(form)
{
	q = eval(form.Q.value);
	n = eval(form.N.value);
	form.QU.value = q*n;
}

function f35(form)
{
	e = eval(form.e.value);
	d = eval(form.d.value);
	form.Y.value = e/2+d;
}

function f36(form)
{
	q = eval(form.Q.value);
	c = eval(form.C.value);
	b = eval(form.B.value);
	v = eval(form.V.value);
	t = eval(form.T.value);
	form.E.value = (0.484*q)/(v*c*b*t);
}

function f37(form)
{
	y = eval(form.Y.value);
	a = eval(form.A.value);
	form.T.value = Math.pow(y, 2)/(2*a);
}

function f38(form)
{
	q = eval(form.Q.value);
	c = eval(form.C.value);
	b = eval(form.B.value);
	v = eval(form.V.value);
	t = eval(form.T.value);
	a = eval(form.A.value);
	y = eval(form.Y.value);
	e = eval(form.E.value);
	st = -(Math.pow(y,2)/(4*a*t));
	form.TT.value = (q*Math.pow(e, st))/(v*c*b*Math.sqrt(4*Math.PI*a*t));
}

function f39(form)
{
	q = eval(form.Q.value);
	c = eval(form.C.value);
	v = eval(form.V.value);
	y = eval(form.Y.value);
	form.T.value = (0.234*q)/(v*c*Math.pow(y,2));
}

function f40(form)
{
	y = eval(form.Y.value);
	a = eval(form.A.value);
	form.T.value = Math.pow(y, 2)/(4*a);
}

function f41(form)
{
	q = eval(form.Q.value);
	c = eval(form.C.value);
	b = eval(form.B.value);
	v = eval(form.V.value);
	t = eval(form.T.value);
	arg = (0.936*q)/(v*c*b*t);
	form.E.value = Math.sqrt(arg);
}

function f42(form)
{
	q = eval(form.Q.value);
	l = eval(form.L.value);
	a = eval(form.A.value);
	t = eval(form.T.value);
	y = eval(form.Y.value);
	v = eval(form.V.value);
	e = eval(form.E.value);
	st = -(Math.pow(y, 2)/(4*a*t))
	form.TT.value = (q*Math.pow(e, st))/(2*Math.PI*l*v*t);
}

function f43(form)
{
	q = eval(form.Q.value);
	l = eval(form.L.value);
	c = eval(form.C.value);
	v = eval(form.V.value);
	b = eval(form.B.value);
	t = eval(form.T.value);
	form.TT.value = Math.pow(q, 2)/(4*Math.PI*l*c*Math.pow(v*b, 2)*Math.pow(t, 2));
}

function f44(form)
{
	v = eval(form.V.value);
	t = eval(form.T.value);
	form.L.value = v*t;
}

function f46(form)
{
	l = eval(form.L.value);
	e = eval(form.E.value);
	form.K.value = l/e;
}

function f47(form)
{
	k = eval(form.K.value);
	i = eval(form.I.value);
	form.A.value = k*i;
}

function f48(form)
{
	d = eval(form.D.value);
	i = eval(form.I.value);
	form.A.value = (i*(1.75-0.15*d))/75;
}

function f49(form)
{
	a = eval(form.A.value);
	e = eval(form.E.value);
	form.K.value = a/e;
}

function f50(form)
{
	e = eval(form.E.value);
	a = eval(form.A.value);
	form.K.value = e/a;
}

function f51(form)
{
	q = eval(form.Q.value);
	v = eval(form.V.value);
	n = eval(form.N.value);
	s = eval(form.S.value);
	form.F.value = (q*n)/(v*s);
}

function f52(form)
{
	q = eval(form.Q.value);
	a = eval(form.A.value);
	b = eval(form.B.value);
	s = eval(form.S.value);
	e = q/(a*b*s);
	form.N.value = Math.exp(-5.9494/Math.exp(e)-1.6737/e-710.14*Math.pow(10, -3));
}

function f53(form)
{
	q = eval(form.Q.value);
	l = eval(form.L.value);
	v = eval(form.V.value);
	t = eval(form.T.value);
	form.TT.value = q/(2*Math.PI*l*v*t);
}

function f54(form)
{
	q = eval(form.Q.value);
	c = eval(form.C.value);
	b = eval(form.B.value);
	v = eval(form.V.value);
	t = eval(form.T.value);
	form.E.value = Math.sqrt((0.936*q)/(v*c*b*t));
}

function f56(form)
{
	q = eval(form.Q.value);
	a = eval(form.A.value);
	v = eval(form.V.value);
	s = eval(form.S.value);
	form.E.value = (q*v)/(Math.pow(a, 2)*s);
}

function f57(form)
{
	f = eval(form.F.value);
	v = eval(form.V.value);
	s = eval(form.S.value);
	q = eval(form.Q.value);
	form.N.value = (f*v*s)/q;
}

function f58(form)
{
	t = eval(form.T.value);
	n = eval(form.N.value);
	form.P.value = t*n;
}

function f59(form)
{
	p = eval(form.P.value);
	n = eval(form.N.value);
	form.S.value = n+p;
}

function f60(form)
{
	l = eval(form.L.value);
	c = eval(form.C.value);
	m = eval(form.M.value);
	o = eval(form.O.value);
	q = eval(form.Q.value);
	v = eval(form.V.value);
	b = eval(form.B.value);
	form.W.value = (-2*Math.PI*l*c*Math.pow((m-o), 3))/Math.pow((q/(v*b)), 2);
}

function f61(form)
{
	f = eval(form.F.value);
	q = eval(form.Q.value);
	v = eval(form.V.value);
	b = eval(form.B.value);
	l = eval(form.L.value);
	c = eval(form.C.value);
	m = eval(form.M.value);
	o = eval(form.O.value);
	
	form.T.value = (f*Math.pow((q/(v*b)), 2))/(l*c*Math.pow((m-o), 2));
}

function f62(form)
{
	t = eval(form.T.value);
	m = eval(form.M.value);
	o = eval(form.O.value);
	
	form.Z.value = (t-o)/(m-o);
}

function f63(form)
{
	t = eval(form.T.value);
	form.F.value = 1/(13.4*Math.pow(t, 2) - 0.089*t);
}

//

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
}

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
	d = eval(form.D.value);
			
	form.E.value = a/(b*d);
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

function af95(form)
{
	m = eval(form.a.value);
					
	form.Ce.value = m*0.15;
}

function af97(form)
{
	m = eval(form.a.value);
					
	form.Ce.value = m*0.3;
}

function af98(form)
{
	m = eval(form.a.value);
					
	form.Ce.value = m*0.5;
}

function af99(form)
{
	m = eval(form.a.value);
					
	form.Ce.value = m*0.2;
}

function af100(form)
{
	a = eval(form.a.value);
	b = eval(form.b.value);
	с = eval(form.c.value);
	d = eval(form.d.value);
	e = eval(form.e.value);
	f = eval(form.f.value);
					
	form.Ce.value = (a*b*c*d)/(e*f);
}

function af101(form)
{
	a = eval(form.a.value);
	b = eval(form.b.value);
	с = eval(form.c.value);
					
	form.Ce.value = a*b*c;
}

////////////


function f653(form)
{
	e = eval(form.e653.value);
	q = eval(form.q653.value);
	S = eval(form.S653.value);
	b = eval(form.b653.value);
	form.As653.value = (0.75*e*q + S*b);
}

function f652(form)
{
	an = eval(form.an652.value);
	I = eval(form.I652.value);
	n = eval(form.n652.value);
	d = eval(form.d652.value);
	y = eval(form.y652.value);
	form.Vpod652.value = ((4*an*I)/(n*(d*d)*y));
}

function f651(form)
{
	k = eval(form.K651.value);
	q = eval(form.q651.value);
	form.Aw651.value = ((k*k)/2)+(1.05*k*q);
}

function f650(form)
{
	an = eval(form.an650.value);
	I = eval(form.I650.value);
	y = eval(form.y650.value);
	Aw = eval(form.Aw650.value);
	form.Vsv650.value = ((an*I)/(y*Aw));
}

function f646(form)
{
	b = eval(form.b646.value);
	S = eval(form.S646.value);
	n = eval(form.n646.value);
	form.Aw646.value = ((b*n)*(S*n)); 
}

function f644(form)
{
	M = eval(form.M644.value);
	Mst = eval(form.Mst644.value);
	h = eval(form.h644.value);
	form.N644.value = ((M - Mst)/h);
}

function f642(form)
{
	Sst = eval(form.Sst642.value);
	hst = eval(form.hst642.value);
	form.Wst642.value = ((Sst*Math.pow(hst, 2))/6);
}

function f638(form)
{
	Sst = eval(form.Sst638.value);
	hst = eval(form.hst638.value);
	form.Ist638.value = ((Sst*Math.pow(hst, 3))/12);
}

function f640(form)
{
	Sst = eval(form.Sst640.value);
	hst = eval(form.hst640.value);
	form.Sx640.value = ((Sst*Math.pow(hst, 2))/8);
}

function f637(form)
{
	M = eval(form.M637.value);
	P = eval(form.P637.value);
	Ist = eval(form.Ist637.value);
	Ix = eval(form.Ix637.value);
	form.Mst637.value = (Math.pow(M, P)*(Ist/Ix));
}

function f641(form)
{
	Mst = eval(form.Mst641.value);
	Wst = eval(form.Wst641.value);
	form.Sig641.value = (Mst/Wst);
}

function f645(form)
{
	N = eval(form.N645.value);
	Aw = eval(form.Aw645.value);
	form.Sig645.value = (N/Aw);
}

function vf61(form)
{
	g = eval(form.g61.value);
	c = eval(form.c61.value);
	fh = eval(form.FH61.value);
	form.FP61.value = ((g*c)*fh);
}

function vf62(form)
{
	f4 = eval(form.F4H62.value);
	f3 = eval(form.F3H62.value);
	f2 = eval(form.F2H62.value);
	f1 = eval(form.F1H62.value);
	I = eval(form.I62.value);
	d = eval(form.d62.value);
	c = eval(form.c62.value);
	b = eval(form.b62.value);
	a = eval(form.a62.value);
	form.RH62.value = ((f4*(I - d)-f3*(I - c)+f2*(I - b)-f1*(I - a))/I);
}

function vf63(form)
{
	f4 = eval(form.F4H63.value);
	f3 = eval(form.F3H63.value);
	f2 = eval(form.F2H63.value);
	f1 = eval(form.F1H63.value);
	I = eval(form.I63.value);
	d = eval(form.d63.value);
	c = eval(form.c63.value);
	b = eval(form.b63.value);
	a = eval(form.a63.value);
	rh = eval(form.RH63.value);
	form.S63.value = (f1*a + f2*b - f3*c + f4*d - rh*I);
}

function vf64(form)
{
	f4 = eval(form.F4H64.value);
	f3 = eval(form.F3H64.value);
	f2 = eval(form.F2H64.value);
	f1 = eval(form.F1H64.value);
	I = eval(form.I64.value);
	d = eval(form.d64.value);
	c = eval(form.c64.value);
	b = eval(form.b64.value);
	a = eval(form.a64.value);
	form.RH64.value = ((f1*a + f2*b - f3*c + f4*d)/I);
}

function vf65(form)
{
	g = eval(form.g65.value);
	c = eval(form.c65.value);
	rh = eval(form.RH65.value);
	form.RP65.value = ((g*c)*rh);
}

function vf66(form)
{
	f4 = eval(form.F4H66.value);
	f3 = eval(form.F3H66.value);
	f2 = eval(form.F2H66.value);
	f1 = eval(form.F1H66.value);
	form.RR66.value = (f1 + f2 - f3 + f4);
}

function vf67(form)
{
	g = eval(form.g67.value);
	c = eval(form.c67.value);
	mh = eval(form.MH67.value);
	form.MP67.value = ((g*c)*mh);
}

function vf68(form)
{
	g = eval(form.g68.value);
	c = eval(form.c68.value);
	form.QP68.value = (g*c);
}

function vf680(form)
{
	g = eval(form.g680.value);
	c = eval(form.c680.value);
	qh = eval(form.QH680.value);
	form.QP680.value = (g*c)*qh;
}

function vf69(form)
{
	m = eval(form.M69.value);
	ry = eval(form.R69.value);
	form.W69.value = (m/(1.12*ry));
}

function vf610(form)
{
	I = eval(form.I610.value);
	ry = eval(form.R610.value);
	fi = eval(form.f610.value);
	mm = eval(form.MM610.value);
	form.h610.value = (((I*ry)/(Math.pow(10, 5)*fi))*mm);
}

function vf611(form)
{
	w = eval(form.W611.value);
	s = eval(form.S611.value);
	form.h611.value = (1.1*Math.sqrt(w*s));
}

function vf612(form)
{
	h = eval(form.h612.value);
	form.S612.value = (7 + (3*h));
}

function vf613(form)
{
	i = eval(form.I613.value);
	form.h613.value = (((1/8)-(1/12))*i);
}

function vf614(form)
{
	w = eval(form.W614.value);
	h = eval(form.h614.value);
	s = eval(form.S614.value);
	form.A614.value = ((w/h) - ((s*h)/6));
}

function vf615(form)
{
	b = eval(form.b615.value);
	r = eval(form.r615.value);
	form.A615.value = (b*r);
}

function vf616(form)
{
	s = eval(form.S616.value);
	h = eval(form.h616.value);
	a = eval(form.A616.value);
	ss = eval(form.SS616.value);
	num = ((ss/2) + (h/2));
	form.I616.value = (((s*Math.pow(h, 3))/12) + 2*a*Math.pow(num, 2));
}

function vf617(form)
{
	i = eval(form.I617.value);
	h = eval(form.h617.value);
	form.W617.value = (2*i)/h;
}

function vf618(form)
{
	hc = eval(form.hc618.value);
	form.h618.value = (hc + 2);
}

function vf619(form)
{
	a = eval(form.A619.value);
	h = eval(form.h619.value);
	s = eval(form.S619.value);
	ac = eval(form.Ac619.value);
	form.Sx619.value = (a*((h/2)+(s/2)) + (ac/2)*(h/4));
}

function vf620(form)
{
	m = eval(form.M620.value);
	w = eval(form.W620.value);
	form.S620.value = (m/w);
}

function vf621(form)
{
	q = eval(form.Q621.value);
	s = eval(form.S621.value);
	i = eval(form.I621.value);
	sc = eval(form.Sc621.value);
	form.t621.value = ((q*s)/(i*sc));
}

function vf622(form)
{
	m = eval(form.M622.value);
	i = eval(form.I622.value);
	ix = eval(form.Ix622.value);
	e = eval(form.E622.value);
	form.f622.value = ((m*i)/(10*e*ix));
}

function vf623(form)
{
	q = eval(form.Q623.value);
	i = eval(form.Ix623.value);
	form.T623.value = (q/i);
}

function vf624(form)
{
	ap = eval(form.Ap624.value);
	a = eval(form.a624.value);
	form.S624.value = (ap*a);
}

function vf625(form)
{
	s = eval(form.S625.value);
	h = eval(form.h625.value);
	form.a625.value = ((s/2) + (h/2));
}

function vf626(form)
{
	t = eval(form.T626.value);
	a = eval(form.A626.value);
	form.tau626.value = (t/a);
}

function vf627(form)
{
	b = eval(form.b627.value);
	form.A627.value = (2*b);
}

function vf628(form)
{
	h = eval(form.h628.value);
	form.a628.value = (2.5*h);
}

function vf629(form)
{
	h = eval(form.h629.value);
	form.b629.value = ((h/30) + 40);
}

function vf630(form)
{
	b = eval(form.b630.value);
	form.S630.value = ((1/15)*b);
}

function vf631(form)
{
	ra = eval(form.Ra631.value);
	rc = eval(form.Rc631.value);
	form.A631.value = (ra/rc);
}

function vf632(form)
{
	s = eval(form.S632.value);
	b = eval(form.b632.value);
	form.A632.value = (s*b);
}

function vf633(form)
{
	b = eval(form.b633.value);
	s = eval(form.S633.value);
	form.bs633.value = (b/s);
}

function vf634(form)
{
	ra = eval(form.Ra634.value);
	b = eval(form.b634.value);
	n = eval(form.n634.value);
	rw = eval(form.Rw634.value);
	num = (ra/(b*n*60*rw));
	form.K634.value = (Math.sqrt(num));
}

function vf635(form)
{
	ra = eval(form.Ra635.value);
	rc = eval(form.Rc635.value);
	form.A635.value = (ra/rc);
}

function vf636(form)
{
	a = eval(form.A636.value);
	s = eval(form.S636.value);
	form.b636.value = (a/s);
}

function vf639(form)
{
	q = eval(form.Q639.value);
	sx = eval(form.Sx639.value);
	i = eval(form.I639.value);
	sc = eval(form.Sc639.value);
	form.t639.value = ((q*sx)/(i*sc));
}

function vf643(form)
{
	s = eval(form.s643.value);
	t = eval(form.t643.value);
	num = ((s*s)+3*(t*t));
	form.sp643.value = (Math.pow(num, 0.5));
}
//////////