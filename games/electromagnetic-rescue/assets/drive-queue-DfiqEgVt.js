import{c as Vr,N as bt,d as kr,C as $e,F as ur,M as Jt,V as He,R as zr,e as dt,w as Bn,W as ai,f as zt,g as nt,L as Kt,H as En,U as Ft,D as xt,B as St,h as jt,i as Sn,p as Wr,E as Xr,j as pt,P as un,A as Yr,k as Cn,l as Ct,m as _n,n as $n,o as en,q as tn,r as pr,t as qr,u as Ht,v as vn,x as Kr,y as $r,z as qt,O as Zr,G as Qr,I as Jr,J as jr,K as ea,Q as ta,T as na,X as ia,Y as ra,Z as aa,_ as oa,$ as sa,a0 as ca,a1 as la,a2 as fa,a3 as da,a4 as ua,a5 as pa,a6 as bn,a7 as Vt,a8 as on,a9 as ha,aa as Zt,ab as ma,ac as _a,ad as va,ae as ga,af as hr,ag as Ea,ah as Sa,ai as Ma,aj as Ta,ak as Oe,al as xa,am as Aa,an as Ra,ao as Ot,ap as Zn,aq as pn,ar as ut,as as mr,at as yt,au as Rt,av as gn,aw as _r,ax as vr,ay as gr,az as Mn,aA as Ca,aB as ba,aC as Pa,aD as La,aE as Er,aF as Nt,aG as Ua,aH as Da,aI as wa,aJ as Sr,aK as Ia,aL as Mr,aM as Tr,aN as Pn,aO as Ln,aP as Un,aQ as Dn,aR as Ye,aS as oi,aT as si,aU as ci,aV as li,aW as fi,aX as di,aY as ui,aZ as pi,a_ as hi,a$ as mi,b0 as _i,b1 as vi,b2 as gi,b3 as Ei,b4 as Si,b5 as Mi,b6 as Ti,b7 as xi,b8 as Ai,b9 as Ri,ba as Ci,bb as bi,bc as Pi,bd as Li,be as Ui,bf as Di,bg as wi,bh as Ii,bi as Gn,bj as Hn,bk as Vn,bl as kn,bm as zn,bn as Wn,bo as Xn,bp as Na,bq as Ni,br as ya,bs as hn,bt as Fa,bu as yi,bv as Fi,bw as Oi,bx as Yn,by as qn,bz as Oa,bA as xr,bB as Ba,bC as Tn,bD as Ga,bE as Ha,bF as Ar,bG as Qn,bH as Bi,bI as Rr,bJ as Gi,bK as Cr,bL as nn,bM as Wt,bN as br,bO as Qt,bP as Va,bQ as ka,bR as za,bS as Hi,bT as ft,bU as Wa,bV as Pr,bW as Xa,bX as Ya,bY as qa,bZ as Ka,b_ as $a,b$ as Za,c0 as Qa,c1 as Ja,c2 as ja,c3 as eo,c4 as to,c5 as no,c6 as io,c7 as ro,c8 as ao,c9 as oo,ca as so,cb as co,cc as lo,cd as fo,ce as sn,cf as uo,cg as Lr,ch as po,ci as ho,cj as mo,ck as _o,cl as vo,cm as go}from"./preferences-B44LDLeE.js";const cn=3.1;function Eo(e){return Math.exp(-((e/1.12)**2))}function ad(e,n=!1){const t=Math.max(0,Math.min(cn,e)),i=t/cn,s=-2.35+4.7*(i-Math.sin(2*Math.PI*i)/(2*Math.PI)),o=n||t===0||t===cn?0:4.7/cn*(1-Math.cos(2*Math.PI*i)),h=Eo(s),f=o===0?0:2*s/1.12**2*h*o;return{x:s,velocity:o,emf:f,flux:h}}function Ur(){let e=null,n=!1,t=null,i=null;function s(o,h){t(o,h),i=e.requestAnimationFrame(s)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(s),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(o){t=o},setContext:function(o){e=o}}}function So(e){const n=new WeakMap;function t(f,x){const g=f.array,P=f.usage,E=g.byteLength,S=e.createBuffer();e.bindBuffer(x,S),e.bufferData(x,g,P),f.onUploadCallback();let A;if(g instanceof Float32Array)A=e.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)A=e.HALF_FLOAT;else if(g instanceof Uint16Array)f.isFloat16BufferAttribute?A=e.HALF_FLOAT:A=e.UNSIGNED_SHORT;else if(g instanceof Int16Array)A=e.SHORT;else if(g instanceof Uint32Array)A=e.UNSIGNED_INT;else if(g instanceof Int32Array)A=e.INT;else if(g instanceof Int8Array)A=e.BYTE;else if(g instanceof Uint8Array)A=e.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)A=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:S,type:A,bytesPerElement:g.BYTES_PER_ELEMENT,version:f.version,size:E}}function i(f,x,g){const P=x.array,E=x.updateRanges;if(e.bindBuffer(g,f),E.length===0)e.bufferSubData(g,0,P);else{E.sort((A,O)=>A.start-O.start);let S=0;for(let A=1;A<E.length;A++){const O=E[S],D=E[A];D.start<=O.start+O.count+1?O.count=Math.max(O.count,D.start+D.count-O.start):(++S,E[S]=D)}E.length=S+1;for(let A=0,O=E.length;A<O;A++){const D=E[A];e.bufferSubData(g,D.start*P.BYTES_PER_ELEMENT,P,D.start,D.count)}x.clearUpdateRanges()}x.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),n.get(f)}function o(f){f.isInterleavedBufferAttribute&&(f=f.data);const x=n.get(f);x&&(e.deleteBuffer(x.buffer),n.delete(f))}function h(f,x){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const P=n.get(f);(!P||P.version<f.version)&&n.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const g=n.get(f);if(g===void 0)n.set(f,t(f,x));else if(g.version<f.version){if(g.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(g.buffer,f,x),g.version=f.version}}return{get:s,remove:o,update:h}}var Mo=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,To=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xo=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ao=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ro=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Co=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bo=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Po=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lo=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Uo=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Do=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wo=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Io=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,No=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yo=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fo=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Oo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Go=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ho=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vo=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ko=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zo=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wo=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xo=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yo=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qo=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ko=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$o=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zo=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qo="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jo=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jo=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,es=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ts=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ns=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,is=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rs=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,as=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,os=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ss=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cs=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ls=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fs=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ds=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,us=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ps=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hs=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ms=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_s=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vs=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gs=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Es=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ss=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ms=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ts=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xs=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,As=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rs=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cs=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bs=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ps=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ls=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Us=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ds=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ws=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Is=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ns=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ys=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fs=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Os=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bs=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gs=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hs=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vs=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ks=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zs=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ws=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xs=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ys=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qs=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ks=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$s=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zs=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qs=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Js=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,js=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ec=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nc=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ic=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ac=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sc=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lc=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pc=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hc=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mc=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_c=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ec=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sc=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mc=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xc=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ac=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rc=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cc=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bc=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Pc=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Lc=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Uc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dc=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wc=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ic=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nc=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yc=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fc=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Oc=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bc=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gc=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hc=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vc=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kc=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zc=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wc=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xc=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yc=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qc=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kc=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$c=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zc=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qc=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jc=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jc=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ie={alphahash_fragment:Mo,alphahash_pars_fragment:To,alphamap_fragment:xo,alphamap_pars_fragment:Ao,alphatest_fragment:Ro,alphatest_pars_fragment:Co,aomap_fragment:bo,aomap_pars_fragment:Po,batching_pars_vertex:Lo,batching_vertex:Uo,begin_vertex:Do,beginnormal_vertex:wo,bsdfs:Io,iridescence_fragment:No,bumpmap_pars_fragment:yo,clipping_planes_fragment:Fo,clipping_planes_pars_fragment:Oo,clipping_planes_pars_vertex:Bo,clipping_planes_vertex:Go,color_fragment:Ho,color_pars_fragment:Vo,color_pars_vertex:ko,color_vertex:zo,common:Wo,cube_uv_reflection_fragment:Xo,defaultnormal_vertex:Yo,displacementmap_pars_vertex:qo,displacementmap_vertex:Ko,emissivemap_fragment:$o,emissivemap_pars_fragment:Zo,colorspace_fragment:Qo,colorspace_pars_fragment:Jo,envmap_fragment:jo,envmap_common_pars_fragment:es,envmap_pars_fragment:ts,envmap_pars_vertex:ns,envmap_physical_pars_fragment:ps,envmap_vertex:is,fog_vertex:rs,fog_pars_vertex:as,fog_fragment:os,fog_pars_fragment:ss,gradientmap_pars_fragment:cs,lightmap_pars_fragment:ls,lights_lambert_fragment:fs,lights_lambert_pars_fragment:ds,lights_pars_begin:us,lights_toon_fragment:hs,lights_toon_pars_fragment:ms,lights_phong_fragment:_s,lights_phong_pars_fragment:vs,lights_physical_fragment:gs,lights_physical_pars_fragment:Es,lights_fragment_begin:Ss,lights_fragment_maps:Ms,lights_fragment_end:Ts,logdepthbuf_fragment:xs,logdepthbuf_pars_fragment:As,logdepthbuf_pars_vertex:Rs,logdepthbuf_vertex:Cs,map_fragment:bs,map_pars_fragment:Ps,map_particle_fragment:Ls,map_particle_pars_fragment:Us,metalnessmap_fragment:Ds,metalnessmap_pars_fragment:ws,morphinstance_vertex:Is,morphcolor_vertex:Ns,morphnormal_vertex:ys,morphtarget_pars_vertex:Fs,morphtarget_vertex:Os,normal_fragment_begin:Bs,normal_fragment_maps:Gs,normal_pars_fragment:Hs,normal_pars_vertex:Vs,normal_vertex:ks,normalmap_pars_fragment:zs,clearcoat_normal_fragment_begin:Ws,clearcoat_normal_fragment_maps:Xs,clearcoat_pars_fragment:Ys,iridescence_pars_fragment:qs,opaque_fragment:Ks,packing:$s,premultiplied_alpha_fragment:Zs,project_vertex:Qs,dithering_fragment:Js,dithering_pars_fragment:js,roughnessmap_fragment:ec,roughnessmap_pars_fragment:tc,shadowmap_pars_fragment:nc,shadowmap_pars_vertex:ic,shadowmap_vertex:rc,shadowmask_pars_fragment:ac,skinbase_vertex:oc,skinning_pars_vertex:sc,skinning_vertex:cc,skinnormal_vertex:lc,specularmap_fragment:fc,specularmap_pars_fragment:dc,tonemapping_fragment:uc,tonemapping_pars_fragment:pc,transmission_fragment:hc,transmission_pars_fragment:mc,uv_pars_fragment:_c,uv_pars_vertex:vc,uv_vertex:gc,worldpos_vertex:Ec,background_vert:Sc,background_frag:Mc,backgroundCube_vert:Tc,backgroundCube_frag:xc,cube_vert:Ac,cube_frag:Rc,depth_vert:Cc,depth_frag:bc,distanceRGBA_vert:Pc,distanceRGBA_frag:Lc,equirect_vert:Uc,equirect_frag:Dc,linedashed_vert:wc,linedashed_frag:Ic,meshbasic_vert:Nc,meshbasic_frag:yc,meshlambert_vert:Fc,meshlambert_frag:Oc,meshmatcap_vert:Bc,meshmatcap_frag:Gc,meshnormal_vert:Hc,meshnormal_frag:Vc,meshphong_vert:kc,meshphong_frag:zc,meshphysical_vert:Wc,meshphysical_frag:Xc,meshtoon_vert:Yc,meshtoon_frag:qc,points_vert:Kc,points_frag:$c,shadow_vert:Zc,shadow_frag:Qc,sprite_vert:Jc,sprite_frag:jc},ie={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Tt={basic:{uniforms:ft([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:ft([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:ft([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:ft([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:ft([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:ft([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:ft([ie.points,ie.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:ft([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:ft([ie.common,ie.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:ft([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:ft([ie.sprite,ie.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:ft([ie.common,ie.displacementmap,{referencePosition:{value:new He},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:ft([ie.lights,ie.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Tt.physical={uniforms:ft([Tt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const ln={r:0,b:0,g:0},Ut=new Rr,el=new Jt;function tl(e,n,t,i,s,o,h){const f=new $e(0);let x=o===!0?0:1,g,P,E=null,S=0,A=null;function O(R){let _=R.isScene===!0?R.background:null;return _&&_.isTexture&&(_=(R.backgroundBlurriness>0?t:n).get(_)),_}function D(R){let _=!1;const y=O(R);y===null?r(f,x):y&&y.isColor&&(r(y,1),_=!0);const b=e.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,h):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,h),(e.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function l(R,_){const y=O(_);y&&(y.isCubeTexture||y.mapping===Tn)?(P===void 0&&(P=new ut(new Qn(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:Bi(Tt.backgroundCube.uniforms),vertexShader:Tt.backgroundCube.vertexShader,fragmentShader:Tt.backgroundCube.fragmentShader,side:St,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),P.geometry.deleteAttribute("normal"),P.geometry.deleteAttribute("uv"),P.onBeforeRender=function(b,N,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(P.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(P)),Ut.copy(_.backgroundRotation),Ut.x*=-1,Ut.y*=-1,Ut.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ut.y*=-1,Ut.z*=-1),P.material.uniforms.envMap.value=y,P.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,P.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,P.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,P.material.uniforms.backgroundRotation.value.setFromMatrix4(el.makeRotationFromEuler(Ut)),P.material.toneMapped=nt.getTransfer(y.colorSpace)!==Ye,(E!==y||S!==y.version||A!==e.toneMapping)&&(P.material.needsUpdate=!0,E=y,S=y.version,A=e.toneMapping),P.layers.enableAll(),R.unshift(P,P.geometry,P.material,0,0,null)):y&&y.isTexture&&(g===void 0&&(g=new ut(new Mn(2,2),new Ot({name:"BackgroundMaterial",uniforms:Bi(Tt.background.uniforms),vertexShader:Tt.background.vertexShader,fragmentShader:Tt.background.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(g)),g.material.uniforms.t2D.value=y,g.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,g.material.toneMapped=nt.getTransfer(y.colorSpace)!==Ye,y.matrixAutoUpdate===!0&&y.updateMatrix(),g.material.uniforms.uvTransform.value.copy(y.matrix),(E!==y||S!==y.version||A!==e.toneMapping)&&(g.material.needsUpdate=!0,E=y,S=y.version,A=e.toneMapping),g.layers.enableAll(),R.unshift(g,g.geometry,g.material,0,0,null))}function r(R,_){R.getRGB(ln,Ar(e)),i.buffers.color.setClear(ln.r,ln.g,ln.b,_,h)}function U(){P!==void 0&&(P.geometry.dispose(),P.material.dispose(),P=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return f},setClearColor:function(R,_=1){f.set(R),x=_,r(f,x)},getClearAlpha:function(){return x},setClearAlpha:function(R){x=R,r(f,x)},render:D,addToRenderList:l,dispose:U}}function nl(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=S(null);let o=s,h=!1;function f(d,C,B,X,Y){let $=!1;const W=E(X,B,C);o!==W&&(o=W,g(o.object)),$=A(d,X,B,Y),$&&O(d,X,B,Y),Y!==null&&n.update(Y,e.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,_(d,C,B,X),Y!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(Y).buffer))}function x(){return e.createVertexArray()}function g(d){return e.bindVertexArray(d)}function P(d){return e.deleteVertexArray(d)}function E(d,C,B){const X=B.wireframe===!0;let Y=i[d.id];Y===void 0&&(Y={},i[d.id]=Y);let $=Y[C.id];$===void 0&&($={},Y[C.id]=$);let W=$[X];return W===void 0&&(W=S(x()),$[X]=W),W}function S(d){const C=[],B=[],X=[];for(let Y=0;Y<t;Y++)C[Y]=0,B[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:B,attributeDivisors:X,object:d,attributes:{},index:null}}function A(d,C,B,X){const Y=o.attributes,$=C.attributes;let W=0;const ne=B.getAttributes();for(const H in ne)if(ne[H].location>=0){const Te=Y[H];let De=$[H];if(De===void 0&&(H==="instanceMatrix"&&d.instanceMatrix&&(De=d.instanceMatrix),H==="instanceColor"&&d.instanceColor&&(De=d.instanceColor)),Te===void 0||Te.attribute!==De||De&&Te.data!==De.data)return!0;W++}return o.attributesNum!==W||o.index!==X}function O(d,C,B,X){const Y={},$=C.attributes;let W=0;const ne=B.getAttributes();for(const H in ne)if(ne[H].location>=0){let Te=$[H];Te===void 0&&(H==="instanceMatrix"&&d.instanceMatrix&&(Te=d.instanceMatrix),H==="instanceColor"&&d.instanceColor&&(Te=d.instanceColor));const De={};De.attribute=Te,Te&&Te.data&&(De.data=Te.data),Y[H]=De,W++}o.attributes=Y,o.attributesNum=W,o.index=X}function D(){const d=o.newAttributes;for(let C=0,B=d.length;C<B;C++)d[C]=0}function l(d){r(d,0)}function r(d,C){const B=o.newAttributes,X=o.enabledAttributes,Y=o.attributeDivisors;B[d]=1,X[d]===0&&(e.enableVertexAttribArray(d),X[d]=1),Y[d]!==C&&(e.vertexAttribDivisor(d,C),Y[d]=C)}function U(){const d=o.newAttributes,C=o.enabledAttributes;for(let B=0,X=C.length;B<X;B++)C[B]!==d[B]&&(e.disableVertexAttribArray(B),C[B]=0)}function R(d,C,B,X,Y,$,W){W===!0?e.vertexAttribIPointer(d,C,B,Y,$):e.vertexAttribPointer(d,C,B,X,Y,$)}function _(d,C,B,X){D();const Y=X.attributes,$=B.getAttributes(),W=C.defaultAttributeValues;for(const ne in $){const H=$[ne];if(H.location>=0){let ve=Y[ne];if(ve===void 0&&(ne==="instanceMatrix"&&d.instanceMatrix&&(ve=d.instanceMatrix),ne==="instanceColor"&&d.instanceColor&&(ve=d.instanceColor)),ve!==void 0){const Te=ve.normalized,De=ve.itemSize,Be=n.get(ve);if(Be===void 0)continue;const et=Be.buffer,Je=Be.type,ke=Be.bytesPerElement,V=Je===e.INT||Je===e.UNSIGNED_INT||ve.gpuType===Er;if(ve.isInterleavedBufferAttribute){const K=ve.data,le=K.stride,be=ve.offset;if(K.isInstancedInterleavedBuffer){for(let Ee=0;Ee<H.locationSize;Ee++)r(H.location+Ee,K.meshPerAttribute);d.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Ee=0;Ee<H.locationSize;Ee++)l(H.location+Ee);e.bindBuffer(e.ARRAY_BUFFER,et);for(let Ee=0;Ee<H.locationSize;Ee++)R(H.location+Ee,De/H.locationSize,Je,Te,le*ke,(be+De/H.locationSize*Ee)*ke,V)}else{if(ve.isInstancedBufferAttribute){for(let K=0;K<H.locationSize;K++)r(H.location+K,ve.meshPerAttribute);d.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let K=0;K<H.locationSize;K++)l(H.location+K);e.bindBuffer(e.ARRAY_BUFFER,et);for(let K=0;K<H.locationSize;K++)R(H.location+K,De/H.locationSize,Je,Te,De*ke,De/H.locationSize*K*ke,V)}}else if(W!==void 0){const Te=W[ne];if(Te!==void 0)switch(Te.length){case 2:e.vertexAttrib2fv(H.location,Te);break;case 3:e.vertexAttrib3fv(H.location,Te);break;case 4:e.vertexAttrib4fv(H.location,Te);break;default:e.vertexAttrib1fv(H.location,Te)}}}}U()}function y(){z();for(const d in i){const C=i[d];for(const B in C){const X=C[B];for(const Y in X)P(X[Y].object),delete X[Y];delete C[B]}delete i[d]}}function b(d){if(i[d.id]===void 0)return;const C=i[d.id];for(const B in C){const X=C[B];for(const Y in X)P(X[Y].object),delete X[Y];delete C[B]}delete i[d.id]}function N(d){for(const C in i){const B=i[C];if(B[d.id]===void 0)continue;const X=B[d.id];for(const Y in X)P(X[Y].object),delete X[Y];delete B[d.id]}}function z(){p(),h=!0,o!==s&&(o=s,g(o.object))}function p(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:z,resetDefaultState:p,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfProgram:N,initAttributes:D,enableAttribute:l,disableUnusedAttributes:U}}function il(e,n,t){let i;function s(g){i=g}function o(g,P){e.drawArrays(i,g,P),t.update(P,i,1)}function h(g,P,E){E!==0&&(e.drawArraysInstanced(i,g,P,E),t.update(P,i,E))}function f(g,P,E){if(E===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,g,0,P,0,E);let A=0;for(let O=0;O<E;O++)A+=P[O];t.update(A,i,1)}function x(g,P,E,S){if(E===0)return;const A=n.get("WEBGL_multi_draw");if(A===null)for(let O=0;O<g.length;O++)h(g[O],P[O],S[O]);else{A.multiDrawArraysInstancedWEBGL(i,g,0,P,0,S,0,E);let O=0;for(let D=0;D<E;D++)O+=P[D]*S[D];t.update(O,i,1)}}this.setMode=s,this.render=o,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=x}function rl(e,n,t,i){let s;function o(){if(s!==void 0)return s;if(n.has("EXT_texture_filter_anisotropic")===!0){const N=n.get("EXT_texture_filter_anisotropic");s=e.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function h(N){return!(N!==Ct&&i.convert(N)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(N){const z=N===En&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(N!==Ft&&i.convert(N)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Nt&&!z)}function x(N){if(N==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=t.precision!==void 0?t.precision:"highp";const P=x(g);P!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",P,"instead."),g=P);const E=t.logarithmicDepthBuffer===!0,S=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),A=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),O=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=e.getParameter(e.MAX_TEXTURE_SIZE),l=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),r=e.getParameter(e.MAX_VERTEX_ATTRIBS),U=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),R=e.getParameter(e.MAX_VARYING_VECTORS),_=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),y=O>0,b=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:x,textureFormatReadable:h,textureTypeReadable:f,precision:g,logarithmicDepthBuffer:E,reversedDepthBuffer:S,maxTextures:A,maxVertexTextures:O,maxTextureSize:D,maxCubemapSize:l,maxAttributes:r,maxVertexUniforms:U,maxVaryings:R,maxFragmentUniforms:_,vertexTextures:y,maxSamples:b}}function al(e){const n=this;let t=null,i=0,s=!1,o=!1;const h=new Ta,f=new Oe,x={value:null,needsUpdate:!1};this.uniform=x,this.numPlanes=0,this.numIntersection=0,this.init=function(E,S){const A=E.length!==0||S||i!==0||s;return s=S,i=E.length,A},this.beginShadows=function(){o=!0,P(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(E,S){t=P(E,S,0)},this.setState=function(E,S,A){const O=E.clippingPlanes,D=E.clipIntersection,l=E.clipShadows,r=e.get(E);if(!s||O===null||O.length===0||o&&!l)o?P(null):g();else{const U=o?0:i,R=U*4;let _=r.clippingState||null;x.value=_,_=P(O,S,R,A);for(let y=0;y!==R;++y)_[y]=t[y];r.clippingState=_,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=U}};function g(){x.value!==t&&(x.value=t,x.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function P(E,S,A,O){const D=E!==null?E.length:0;let l=null;if(D!==0){if(l=x.value,O!==!0||l===null){const r=A+D*4,U=S.matrixWorldInverse;f.getNormalMatrix(U),(l===null||l.length<r)&&(l=new Float32Array(r));for(let R=0,_=A;R!==D;++R,_+=4)h.copy(E[R]).applyMatrix4(U,f),h.normal.toArray(l,_),l[_+3]=h.constant}x.value=l,x.needsUpdate=!0}return n.numPlanes=D,n.numIntersection=0,l}}function ol(e){let n=new WeakMap;function t(h,f){return f===Yn?h.mapping=nn:f===qn&&(h.mapping=Wt),h}function i(h){if(h&&h.isTexture){const f=h.mapping;if(f===Yn||f===qn)if(n.has(h)){const x=n.get(h).texture;return t(x,h.mapping)}else{const x=h.image;if(x&&x.height>0){const g=new Oa(x.height);return g.fromEquirectangularTexture(e,h),n.set(h,g),h.addEventListener("dispose",s),t(g.texture,h.mapping)}else return null}}return h}function s(h){const f=h.target;f.removeEventListener("dispose",s);const x=n.get(f);x!==void 0&&(n.delete(f),x.dispose())}function o(){n=new WeakMap}return{get:i,dispose:o}}const kt=4,Vi=[.125,.215,.35,.446,.526,.582],It=20,wn=new br,ki=new $e;let In=null,Nn=0,yn=0,Fn=!1;const wt=(1+Math.sqrt(5))/2,Gt=1/wt,zi=[new He(-wt,Gt,0),new He(wt,Gt,0),new He(-Gt,0,wt),new He(Gt,0,wt),new He(0,wt,-Gt),new He(0,wt,Gt),new He(-1,1,-1),new He(1,1,-1),new He(-1,1,1),new He(1,1,1)],sl=new He;class Wi{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,t=0,i=.1,s=100,o={}){const{size:h=256,position:f=sl}=o;In=this._renderer.getRenderTarget(),Nn=this._renderer.getActiveCubeFace(),yn=this._renderer.getActiveMipmapLevel(),Fn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const x=this._allocateTargets();return x.depthBuffer=!0,this._sceneToCubeUV(n,i,s,x,f),t>0&&this._blur(x,0,0,t),this._applyPMREM(x),this._cleanup(x),x}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qi(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yi(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(In,Nn,yn),this._renderer.xr.enabled=Fn,n.scissorTest=!1,fn(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===nn||n.mapping===Wt?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),In=this._renderer.getRenderTarget(),Nn=this._renderer.getActiveCubeFace(),yn=this._renderer.getActiveMipmapLevel(),Fn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:En,format:Ct,colorSpace:Sn,depthBuffer:!1},s=Xi(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xi(n,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cl(o)),this._blurMaterial=ll(o,n,t)}return s}_compileMaterial(n){const t=new ut(this._lodPlanes[0],n);this._renderer.compile(t,wn)}_sceneToCubeUV(n,t,i,s,o){const x=new un(90,1,t,i),g=[1,-1,1,1,1,1],P=[1,1,1,-1,-1,-1],E=this._renderer,S=E.autoClear,A=E.toneMapping;E.getClearColor(ki),E.toneMapping=bt,E.autoClear=!1,E.state.buffers.depth.getReversed()&&(E.setRenderTarget(s),E.clearDepth(),E.setRenderTarget(null));const D=new Qt({name:"PMREM.Background",side:St,depthWrite:!1,depthTest:!1}),l=new ut(new Qn,D);let r=!1;const U=n.background;U?U.isColor&&(D.color.copy(U),n.background=null,r=!0):(D.color.copy(ki),r=!0);for(let R=0;R<6;R++){const _=R%3;_===0?(x.up.set(0,g[R],0),x.position.set(o.x,o.y,o.z),x.lookAt(o.x+P[R],o.y,o.z)):_===1?(x.up.set(0,0,g[R]),x.position.set(o.x,o.y,o.z),x.lookAt(o.x,o.y+P[R],o.z)):(x.up.set(0,g[R],0),x.position.set(o.x,o.y,o.z),x.lookAt(o.x,o.y,o.z+P[R]));const y=this._cubeSize;fn(s,_*y,R>2?y:0,y,y),E.setRenderTarget(s),r&&E.render(l,x),E.render(n,x)}l.geometry.dispose(),l.material.dispose(),E.toneMapping=A,E.autoClear=S,n.background=U}_textureToCubeUV(n,t){const i=this._renderer,s=n.mapping===nn||n.mapping===Wt;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qi()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yi());const o=s?this._cubemapMaterial:this._equirectMaterial,h=new ut(this._lodPlanes[0],o),f=o.uniforms;f.envMap.value=n;const x=this._cubeSize;fn(t,0,0,3*x,2*x),i.setRenderTarget(t),i.render(h,wn)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const h=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),f=zi[(s-o-1)%zi.length];this._blur(n,o-1,o,h,f)}t.autoClear=i}_blur(n,t,i,s,o){const h=this._pingPongRenderTarget;this._halfBlur(n,h,t,i,s,"latitudinal",o),this._halfBlur(h,n,i,i,s,"longitudinal",o)}_halfBlur(n,t,i,s,o,h,f){const x=this._renderer,g=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const P=3,E=new ut(this._lodPlanes[s],g),S=g.uniforms,A=this._sizeLods[i]-1,O=isFinite(o)?Math.PI/(2*A):2*Math.PI/(2*It-1),D=o/O,l=isFinite(o)?1+Math.floor(P*D):It;l>It&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${l} samples when the maximum is set to ${It}`);const r=[];let U=0;for(let N=0;N<It;++N){const z=N/D,p=Math.exp(-z*z/2);r.push(p),N===0?U+=p:N<l&&(U+=2*p)}for(let N=0;N<r.length;N++)r[N]=r[N]/U;S.envMap.value=n.texture,S.samples.value=l,S.weights.value=r,S.latitudinal.value=h==="latitudinal",f&&(S.poleAxis.value=f);const{_lodMax:R}=this;S.dTheta.value=O,S.mipInt.value=R-i;const _=this._sizeLods[s],y=3*_*(s>R-kt?s-R+kt:0),b=4*(this._cubeSize-_);fn(t,y,b,3*_,2*_),x.setRenderTarget(t),x.render(E,wn)}}function cl(e){const n=[],t=[],i=[];let s=e;const o=e-kt+1+Vi.length;for(let h=0;h<o;h++){const f=Math.pow(2,s);t.push(f);let x=1/f;h>e-kt?x=Vi[h-e+kt-1]:h===0&&(x=0),i.push(x);const g=1/(f-2),P=-g,E=1+g,S=[P,P,E,P,E,E,P,P,E,E,P,E],A=6,O=6,D=3,l=2,r=1,U=new Float32Array(D*O*A),R=new Float32Array(l*O*A),_=new Float32Array(r*O*A);for(let b=0;b<A;b++){const N=b%3*2/3-1,z=b>2?0:-1,p=[N,z,0,N+2/3,z,0,N+2/3,z+1,0,N,z,0,N+2/3,z+1,0,N,z+1,0];U.set(p,D*O*b),R.set(S,l*O*b);const d=[b,b,b,b,b,b];_.set(d,r*O*b)}const y=new Zn;y.setAttribute("position",new pn(U,D)),y.setAttribute("uv",new pn(R,l)),y.setAttribute("faceIndex",new pn(_,r)),n.push(y),s>kt&&s--}return{lodPlanes:n,sizeLods:t,sigmas:i}}function Xi(e,n,t){const i=new zt(e,n,t);return i.texture.mapping=Tn,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fn(e,n,t,i,s){e.viewport.set(n,t,i,s),e.scissor.set(n,t,i,s)}function ll(e,n,t){const i=new Float32Array(It),s=new He(0,1,0);return new Ot({name:"SphericalGaussianBlur",defines:{n:It,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Jn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yt,depthTest:!1,depthWrite:!1})}function Yi(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yt,depthTest:!1,depthWrite:!1})}function qi(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yt,depthTest:!1,depthWrite:!1})}function Jn(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fl(e){let n=new WeakMap,t=null;function i(f){if(f&&f.isTexture){const x=f.mapping,g=x===Yn||x===qn,P=x===nn||x===Wt;if(g||P){let E=n.get(f);const S=E!==void 0?E.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==S)return t===null&&(t=new Wi(e)),E=g?t.fromEquirectangular(f,E):t.fromCubemap(f,E),E.texture.pmremVersion=f.pmremVersion,n.set(f,E),E.texture;if(E!==void 0)return E.texture;{const A=f.image;return g&&A&&A.height>0||P&&A&&s(A)?(t===null&&(t=new Wi(e)),E=g?t.fromEquirectangular(f):t.fromCubemap(f),E.texture.pmremVersion=f.pmremVersion,n.set(f,E),f.addEventListener("dispose",o),E.texture):null}}}return f}function s(f){let x=0;const g=6;for(let P=0;P<g;P++)f[P]!==void 0&&x++;return x===g}function o(f){const x=f.target;x.removeEventListener("dispose",o);const g=n.get(x);g!==void 0&&(n.delete(x),g.dispose())}function h(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:h}}function dl(e){const n={};function t(i){if(n[i]!==void 0)return n[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return n[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Bn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ul(e,n,t,i){const s={},o=new WeakMap;function h(E){const S=E.target;S.index!==null&&n.remove(S.index);for(const O in S.attributes)n.remove(S.attributes[O]);S.removeEventListener("dispose",h),delete s[S.id];const A=o.get(S);A&&(n.remove(A),o.delete(S)),i.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,t.memory.geometries--}function f(E,S){return s[S.id]===!0||(S.addEventListener("dispose",h),s[S.id]=!0,t.memory.geometries++),S}function x(E){const S=E.attributes;for(const A in S)n.update(S[A],e.ARRAY_BUFFER)}function g(E){const S=[],A=E.index,O=E.attributes.position;let D=0;if(A!==null){const U=A.array;D=A.version;for(let R=0,_=U.length;R<_;R+=3){const y=U[R+0],b=U[R+1],N=U[R+2];S.push(y,b,b,N,N,y)}}else if(O!==void 0){const U=O.array;D=O.version;for(let R=0,_=U.length/3-1;R<_;R+=3){const y=R+0,b=R+1,N=R+2;S.push(y,b,b,N,N,y)}}else return;const l=new(za(S)?Va:ka)(S,1);l.version=D;const r=o.get(E);r&&n.remove(r),o.set(E,l)}function P(E){const S=o.get(E);if(S){const A=E.index;A!==null&&S.version<A.version&&g(E)}else g(E);return o.get(E)}return{get:f,update:x,getWireframeAttribute:P}}function pl(e,n,t){let i;function s(S){i=S}let o,h;function f(S){o=S.type,h=S.bytesPerElement}function x(S,A){e.drawElements(i,A,o,S*h),t.update(A,i,1)}function g(S,A,O){O!==0&&(e.drawElementsInstanced(i,A,o,S*h,O),t.update(A,i,O))}function P(S,A,O){if(O===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,A,0,o,S,0,O);let l=0;for(let r=0;r<O;r++)l+=A[r];t.update(l,i,1)}function E(S,A,O,D){if(O===0)return;const l=n.get("WEBGL_multi_draw");if(l===null)for(let r=0;r<S.length;r++)g(S[r]/h,A[r],D[r]);else{l.multiDrawElementsInstancedWEBGL(i,A,0,o,S,0,D,0,O);let r=0;for(let U=0;U<O;U++)r+=A[U]*D[U];t.update(r,i,1)}}this.setMode=s,this.setIndex=f,this.render=x,this.renderInstances=g,this.renderMultiDraw=P,this.renderMultiDrawInstances=E}function hl(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,h,f){switch(t.calls++,h){case e.TRIANGLES:t.triangles+=f*(o/3);break;case e.LINES:t.lines+=f*(o/2);break;case e.LINE_STRIP:t.lines+=f*(o-1);break;case e.LINE_LOOP:t.lines+=f*o;break;case e.POINTS:t.points+=f*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:s,update:i}}function ml(e,n,t){const i=new WeakMap,s=new dt;function o(h,f,x){const g=h.morphTargetInfluences,P=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,E=P!==void 0?P.length:0;let S=i.get(f);if(S===void 0||S.count!==E){let p=function(){N.dispose(),i.delete(f),f.removeEventListener("dispose",p)};S!==void 0&&S.texture.dispose();const A=f.morphAttributes.position!==void 0,O=f.morphAttributes.normal!==void 0,D=f.morphAttributes.color!==void 0,l=f.morphAttributes.position||[],r=f.morphAttributes.normal||[],U=f.morphAttributes.color||[];let R=0;A===!0&&(R=1),O===!0&&(R=2),D===!0&&(R=3);let _=f.attributes.position.count*R,y=1;_>n.maxTextureSize&&(y=Math.ceil(_/n.maxTextureSize),_=n.maxTextureSize);const b=new Float32Array(_*y*4*E),N=new xr(b,_,y,E);N.type=Nt,N.needsUpdate=!0;const z=R*4;for(let d=0;d<E;d++){const C=l[d],B=r[d],X=U[d],Y=_*y*4*d;for(let $=0;$<C.count;$++){const W=$*z;A===!0&&(s.fromBufferAttribute(C,$),b[Y+W+0]=s.x,b[Y+W+1]=s.y,b[Y+W+2]=s.z,b[Y+W+3]=0),O===!0&&(s.fromBufferAttribute(B,$),b[Y+W+4]=s.x,b[Y+W+5]=s.y,b[Y+W+6]=s.z,b[Y+W+7]=0),D===!0&&(s.fromBufferAttribute(X,$),b[Y+W+8]=s.x,b[Y+W+9]=s.y,b[Y+W+10]=s.z,b[Y+W+11]=X.itemSize===4?s.w:1)}}S={count:E,texture:N,size:new pt(_,y)},i.set(f,S),f.addEventListener("dispose",p)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)x.getUniforms().setValue(e,"morphTexture",h.morphTexture,t);else{let A=0;for(let D=0;D<g.length;D++)A+=g[D];const O=f.morphTargetsRelative?1:1-A;x.getUniforms().setValue(e,"morphTargetBaseInfluence",O),x.getUniforms().setValue(e,"morphTargetInfluences",g)}x.getUniforms().setValue(e,"morphTargetsTexture",S.texture,t),x.getUniforms().setValue(e,"morphTargetsTextureSize",S.size)}return{update:o}}function _l(e,n,t,i){let s=new WeakMap;function o(x){const g=i.render.frame,P=x.geometry,E=n.get(x,P);if(s.get(E)!==g&&(n.update(E),s.set(E,g)),x.isInstancedMesh&&(x.hasEventListener("dispose",f)===!1&&x.addEventListener("dispose",f),s.get(x)!==g&&(t.update(x.instanceMatrix,e.ARRAY_BUFFER),x.instanceColor!==null&&t.update(x.instanceColor,e.ARRAY_BUFFER),s.set(x,g))),x.isSkinnedMesh){const S=x.skeleton;s.get(S)!==g&&(S.update(),s.set(S,g))}return E}function h(){s=new WeakMap}function f(x){const g=x.target;g.removeEventListener("dispose",f),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:o,dispose:h}}const Dr=new eo,Ki=new pr(1,1),wr=new xr,Ir=new ja,Nr=new Ja,$i=[],Zi=[],Qi=new Float32Array(16),Ji=new Float32Array(9),ji=new Float32Array(4);function Xt(e,n,t){const i=e[0];if(i<=0||i>0)return e;const s=n*t;let o=$i[s];if(o===void 0&&(o=new Float32Array(s),$i[s]=o),n!==0){i.toArray(o,0);for(let h=1,f=0;h!==n;++h)f+=t,e[h].toArray(o,f)}return o}function it(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function rt(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function xn(e,n){let t=Zi[n];t===void 0&&(t=new Int32Array(n),Zi[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function vl(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function gl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(it(t,n))return;e.uniform2fv(this.addr,n),rt(t,n)}}function El(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(it(t,n))return;e.uniform3fv(this.addr,n),rt(t,n)}}function Sl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(it(t,n))return;e.uniform4fv(this.addr,n),rt(t,n)}}function Ml(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(it(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),rt(t,n)}else{if(it(t,i))return;ji.set(i),e.uniformMatrix2fv(this.addr,!1,ji),rt(t,i)}}function Tl(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(it(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),rt(t,n)}else{if(it(t,i))return;Ji.set(i),e.uniformMatrix3fv(this.addr,!1,Ji),rt(t,i)}}function xl(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(it(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),rt(t,n)}else{if(it(t,i))return;Qi.set(i),e.uniformMatrix4fv(this.addr,!1,Qi),rt(t,i)}}function Al(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function Rl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(it(t,n))return;e.uniform2iv(this.addr,n),rt(t,n)}}function Cl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(it(t,n))return;e.uniform3iv(this.addr,n),rt(t,n)}}function bl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(it(t,n))return;e.uniform4iv(this.addr,n),rt(t,n)}}function Pl(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function Ll(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(it(t,n))return;e.uniform2uiv(this.addr,n),rt(t,n)}}function Ul(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(it(t,n))return;e.uniform3uiv(this.addr,n),rt(t,n)}}function Dl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(it(t,n))return;e.uniform4uiv(this.addr,n),rt(t,n)}}function wl(e,n,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let o;this.type===e.SAMPLER_2D_SHADOW?(Ki.compareFunction=hr,o=Ki):o=Dr,t.setTexture2D(n||o,s)}function Il(e,n,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(n||Ir,s)}function Nl(e,n,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(n||Nr,s)}function yl(e,n,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(n||wr,s)}function Fl(e){switch(e){case 5126:return vl;case 35664:return gl;case 35665:return El;case 35666:return Sl;case 35674:return Ml;case 35675:return Tl;case 35676:return xl;case 5124:case 35670:return Al;case 35667:case 35671:return Rl;case 35668:case 35672:return Cl;case 35669:case 35673:return bl;case 5125:return Pl;case 36294:return Ll;case 36295:return Ul;case 36296:return Dl;case 35678:case 36198:case 36298:case 36306:case 35682:return wl;case 35679:case 36299:case 36307:return Il;case 35680:case 36300:case 36308:case 36293:return Nl;case 36289:case 36303:case 36311:case 36292:return yl}}function Ol(e,n){e.uniform1fv(this.addr,n)}function Bl(e,n){const t=Xt(n,this.size,2);e.uniform2fv(this.addr,t)}function Gl(e,n){const t=Xt(n,this.size,3);e.uniform3fv(this.addr,t)}function Hl(e,n){const t=Xt(n,this.size,4);e.uniform4fv(this.addr,t)}function Vl(e,n){const t=Xt(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function kl(e,n){const t=Xt(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function zl(e,n){const t=Xt(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function Wl(e,n){e.uniform1iv(this.addr,n)}function Xl(e,n){e.uniform2iv(this.addr,n)}function Yl(e,n){e.uniform3iv(this.addr,n)}function ql(e,n){e.uniform4iv(this.addr,n)}function Kl(e,n){e.uniform1uiv(this.addr,n)}function $l(e,n){e.uniform2uiv(this.addr,n)}function Zl(e,n){e.uniform3uiv(this.addr,n)}function Ql(e,n){e.uniform4uiv(this.addr,n)}function Jl(e,n,t){const i=this.cache,s=n.length,o=xn(t,s);it(i,o)||(e.uniform1iv(this.addr,o),rt(i,o));for(let h=0;h!==s;++h)t.setTexture2D(n[h]||Dr,o[h])}function jl(e,n,t){const i=this.cache,s=n.length,o=xn(t,s);it(i,o)||(e.uniform1iv(this.addr,o),rt(i,o));for(let h=0;h!==s;++h)t.setTexture3D(n[h]||Ir,o[h])}function ef(e,n,t){const i=this.cache,s=n.length,o=xn(t,s);it(i,o)||(e.uniform1iv(this.addr,o),rt(i,o));for(let h=0;h!==s;++h)t.setTextureCube(n[h]||Nr,o[h])}function tf(e,n,t){const i=this.cache,s=n.length,o=xn(t,s);it(i,o)||(e.uniform1iv(this.addr,o),rt(i,o));for(let h=0;h!==s;++h)t.setTexture2DArray(n[h]||wr,o[h])}function nf(e){switch(e){case 5126:return Ol;case 35664:return Bl;case 35665:return Gl;case 35666:return Hl;case 35674:return Vl;case 35675:return kl;case 35676:return zl;case 5124:case 35670:return Wl;case 35667:case 35671:return Xl;case 35668:case 35672:return Yl;case 35669:case 35673:return ql;case 5125:return Kl;case 36294:return $l;case 36295:return Zl;case 36296:return Ql;case 35678:case 36198:case 36298:case 36306:case 35682:return Jl;case 35679:case 36299:case 36307:return jl;case 35680:case 36300:case 36308:case 36293:return ef;case 36289:case 36303:case 36311:case 36292:return tf}}class rf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Fl(t.type)}}class af{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nf(t.type)}}class of{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const s=this.seq;for(let o=0,h=s.length;o!==h;++o){const f=s[o];f.setValue(n,t[f.id],i)}}}const On=/(\w+)(\])?(\[|\.)?/g;function er(e,n){e.seq.push(n),e.map[n.id]=n}function sf(e,n,t){const i=e.name,s=i.length;for(On.lastIndex=0;;){const o=On.exec(i),h=On.lastIndex;let f=o[1];const x=o[2]==="]",g=o[3];if(x&&(f=f|0),g===void 0||g==="["&&h+2===s){er(t,g===void 0?new rf(f,e,n):new af(f,e,n));break}else{let E=t.map[f];E===void 0&&(E=new of(f),er(t,E)),t=E}}}class mn{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=n.getActiveUniform(t,s),h=n.getUniformLocation(t,o.name);sf(o,h,this)}}setValue(n,t,i,s){const o=this.map[t];o!==void 0&&o.setValue(n,i,s)}setOptional(n,t,i){const s=t[i];s!==void 0&&this.setValue(n,i,s)}static upload(n,t,i,s){for(let o=0,h=t.length;o!==h;++o){const f=t[o],x=i[f.id];x.needsUpdate!==!1&&f.setValue(n,x.value,s)}}static seqWithValue(n,t){const i=[];for(let s=0,o=n.length;s!==o;++s){const h=n[s];h.id in t&&i.push(h)}return i}}function tr(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const cf=37297;let lf=0;function ff(e,n){const t=e.split(`
`),i=[],s=Math.max(n-6,0),o=Math.min(n+6,t.length);for(let h=s;h<o;h++){const f=h+1;i.push(`${f===n?">":" "} ${f}: ${t[h]}`)}return i.join(`
`)}const nr=new Oe;function df(e){nt._getMatrix(nr,nt.workingColorSpace,e);const n=`mat3( ${nr.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(e)){case Cr:return[n,"LinearTransferOETF"];case Ye:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function ir(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),o=(e.getShaderInfoLog(n)||"").trim();if(i&&o==="")return"";const h=/ERROR: 0:(\d+)/.exec(o);if(h){const f=parseInt(h[1]);return t.toUpperCase()+`

`+o+`

`+ff(e.getShaderSource(n),f)}else return o}function uf(e,n){const t=df(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function pf(e,n){let t;switch(n){case Qa:t="Linear";break;case Za:t="Reinhard";break;case $a:t="Cineon";break;case Ka:t="ACESFilmic";break;case qa:t="AgX";break;case Ya:t="Neutral";break;case Xa:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const dn=new He;function hf(){nt.getLuminanceCoefficients(dn);const e=dn.x.toFixed(4),n=dn.y.toFixed(4),t=dn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mf(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($t).join(`
`)}function _f(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function vf(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=e.getActiveAttrib(n,s),h=o.name;let f=1;o.type===e.FLOAT_MAT2&&(f=2),o.type===e.FLOAT_MAT3&&(f=3),o.type===e.FLOAT_MAT4&&(f=4),t[h]={type:o.type,location:e.getAttribLocation(n,h),locationSize:f}}return t}function $t(e){return e!==""}function rr(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function ar(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const gf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kn(e){return e.replace(gf,Sf)}const Ef=new Map;function Sf(e,n){let t=Ie[n];if(t===void 0){const i=Ef.get(n);if(i!==void 0)t=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return Kn(t)}const Mf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function or(e){return e.replace(Mf,Tf)}function Tf(e,n,t,i){let s="";for(let o=parseInt(n);o<parseInt(t);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function sr(e){let n=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?n+=`
#define HIGH_PRECISION`:e.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function xf(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===mr?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===Pr?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Rt&&(n="SHADOWMAP_TYPE_VSM"),n}function Af(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case nn:case Wt:n="ENVMAP_TYPE_CUBE";break;case Tn:n="ENVMAP_TYPE_CUBE_UV";break}return n}function Rf(e){let n="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===Wt&&(n="ENVMAP_MODE_REFRACTION"),n}function Cf(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case ro:n="ENVMAP_BLENDING_MULTIPLY";break;case io:n="ENVMAP_BLENDING_MIX";break;case no:n="ENVMAP_BLENDING_ADD";break}return n}function bf(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Pf(e,n,t,i){const s=e.getContext(),o=t.defines;let h=t.vertexShader,f=t.fragmentShader;const x=xf(t),g=Af(t),P=Rf(t),E=Cf(t),S=bf(t),A=mf(t),O=_f(o),D=s.createProgram();let l,r,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,O].filter($t).join(`
`),l.length>0&&(l+=`
`),r=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,O].filter($t).join(`
`),r.length>0&&(r+=`
`)):(l=[sr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,O,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+P:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+x:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($t).join(`
`),r=[sr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,O,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.envMap?"#define "+P:"",t.envMap?"#define "+E:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+x:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bt?"#define TONE_MAPPING":"",t.toneMapping!==bt?Ie.tonemapping_pars_fragment:"",t.toneMapping!==bt?pf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,uf("linearToOutputTexel",t.outputColorSpace),hf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($t).join(`
`)),h=Kn(h),h=rr(h,t),h=ar(h,t),f=Kn(f),f=rr(f,t),f=ar(f,t),h=or(h),f=or(f),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,l=[A,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+l,r=["#define varying in",t.glslVersion===Hi?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hi?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+r);const R=U+l+h,_=U+r+f,y=tr(s,s.VERTEX_SHADER,R),b=tr(s,s.FRAGMENT_SHADER,_);s.attachShader(D,y),s.attachShader(D,b),t.index0AttributeName!==void 0?s.bindAttribLocation(D,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(D,0,"position"),s.linkProgram(D);function N(C){if(e.debug.checkShaderErrors){const B=s.getProgramInfoLog(D)||"",X=s.getShaderInfoLog(y)||"",Y=s.getShaderInfoLog(b)||"",$=B.trim(),W=X.trim(),ne=Y.trim();let H=!0,ve=!0;if(s.getProgramParameter(D,s.LINK_STATUS)===!1)if(H=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,D,y,b);else{const Te=ir(s,y,"vertex"),De=ir(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(D,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+$+`
`+Te+`
`+De)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(W===""||ne==="")&&(ve=!1);ve&&(C.diagnostics={runnable:H,programLog:$,vertexShader:{log:W,prefix:l},fragmentShader:{log:ne,prefix:r}})}s.deleteShader(y),s.deleteShader(b),z=new mn(s,D),p=vf(s,D)}let z;this.getUniforms=function(){return z===void 0&&N(this),z};let p;this.getAttributes=function(){return p===void 0&&N(this),p};let d=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return d===!1&&(d=s.getProgramParameter(D,cf)),d},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(D),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lf++,this.cacheKey=n,this.usedTimes=1,this.program=D,this.vertexShader=y,this.fragmentShader=b,this}let Lf=0;class Uf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(i),h=this._getShaderCacheForMaterial(n);return h.has(s)===!1&&(h.add(s),s.usedTimes++),h.has(o)===!1&&(h.add(o),o.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new Df(n),t.set(n,i)),i}}class Df{constructor(n){this.id=Lf++,this.code=n,this.usedTimes=0}}function wf(e,n,t,i,s,o,h){const f=new Wa,x=new Uf,g=new Set,P=[],E=s.logarithmicDepthBuffer,S=s.vertexTextures;let A=s.precision;const O={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function D(p){return g.add(p),p===0?"uv":`uv${p}`}function l(p,d,C,B,X){const Y=B.fog,$=X.geometry,W=p.isMeshStandardMaterial?B.environment:null,ne=(p.isMeshStandardMaterial?t:n).get(p.envMap||W),H=ne&&ne.mapping===Tn?ne.image.height:null,ve=O[p.type];p.precision!==null&&(A=s.getMaxPrecision(p.precision),A!==p.precision&&console.warn("THREE.WebGLProgram.getParameters:",p.precision,"not supported, using",A,"instead."));const Te=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,De=Te!==void 0?Te.length:0;let Be=0;$.morphAttributes.position!==void 0&&(Be=1),$.morphAttributes.normal!==void 0&&(Be=2),$.morphAttributes.color!==void 0&&(Be=3);let et,Je,ke,V;if(ve){const Ge=Tt[ve];et=Ge.vertexShader,Je=Ge.fragmentShader}else et=p.vertexShader,Je=p.fragmentShader,x.update(p),ke=x.getVertexShaderID(p),V=x.getFragmentShaderID(p);const K=e.getRenderTarget(),le=e.state.buffers.depth.getReversed(),be=X.isInstancedMesh===!0,Ee=X.isBatchedMesh===!0,ye=!!p.map,ot=!!p.matcap,m=!!ne,qe=!!p.aoMap,Le=!!p.lightMap,Re=!!p.bumpMap,ue=!!p.normalMap,Ke=!!p.displacementMap,pe=!!p.emissiveMap,we=!!p.metalnessMap,at=!!p.roughnessMap,tt=p.anisotropy>0,u=p.clearcoat>0,a=p.dispersion>0,L=p.iridescence>0,G=p.sheen>0,q=p.transmission>0,F=tt&&!!p.anisotropyMap,ge=u&&!!p.clearcoatMap,ee=u&&!!p.clearcoatNormalMap,he=u&&!!p.clearcoatRoughnessMap,me=L&&!!p.iridescenceMap,J=L&&!!p.iridescenceThicknessMap,oe=G&&!!p.sheenColorMap,Ae=G&&!!p.sheenRoughnessMap,_e=!!p.specularMap,re=!!p.specularColorMap,Ue=!!p.specularIntensityMap,v=q&&!!p.transmissionMap,j=q&&!!p.thicknessMap,te=!!p.gradientMap,ce=!!p.alphaMap,Z=p.alphaTest>0,k=!!p.alphaHash,de=!!p.extensions;let Pe=bt;p.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Pe=e.toneMapping);const We={shaderID:ve,shaderType:p.type,shaderName:p.name,vertexShader:et,fragmentShader:Je,defines:p.defines,customVertexShaderID:ke,customFragmentShaderID:V,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:A,batching:Ee,batchingColor:Ee&&X._colorsTexture!==null,instancing:be,instancingColor:be&&X.instanceColor!==null,instancingMorph:be&&X.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:K===null?e.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Sn,alphaToCoverage:!!p.alphaToCoverage,map:ye,matcap:ot,envMap:m,envMapMode:m&&ne.mapping,envMapCubeUVHeight:H,aoMap:qe,lightMap:Le,bumpMap:Re,normalMap:ue,displacementMap:S&&Ke,emissiveMap:pe,normalMapObjectSpace:ue&&p.normalMapType===Ha,normalMapTangentSpace:ue&&p.normalMapType===Ga,metalnessMap:we,roughnessMap:at,anisotropy:tt,anisotropyMap:F,clearcoat:u,clearcoatMap:ge,clearcoatNormalMap:ee,clearcoatRoughnessMap:he,dispersion:a,iridescence:L,iridescenceMap:me,iridescenceThicknessMap:J,sheen:G,sheenColorMap:oe,sheenRoughnessMap:Ae,specularMap:_e,specularColorMap:re,specularIntensityMap:Ue,transmission:q,transmissionMap:v,thicknessMap:j,gradientMap:te,opaque:p.transparent===!1&&p.blending===hn&&p.alphaToCoverage===!1,alphaMap:ce,alphaTest:Z,alphaHash:k,combine:p.combine,mapUv:ye&&D(p.map.channel),aoMapUv:qe&&D(p.aoMap.channel),lightMapUv:Le&&D(p.lightMap.channel),bumpMapUv:Re&&D(p.bumpMap.channel),normalMapUv:ue&&D(p.normalMap.channel),displacementMapUv:Ke&&D(p.displacementMap.channel),emissiveMapUv:pe&&D(p.emissiveMap.channel),metalnessMapUv:we&&D(p.metalnessMap.channel),roughnessMapUv:at&&D(p.roughnessMap.channel),anisotropyMapUv:F&&D(p.anisotropyMap.channel),clearcoatMapUv:ge&&D(p.clearcoatMap.channel),clearcoatNormalMapUv:ee&&D(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&D(p.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&D(p.iridescenceMap.channel),iridescenceThicknessMapUv:J&&D(p.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&D(p.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&D(p.sheenRoughnessMap.channel),specularMapUv:_e&&D(p.specularMap.channel),specularColorMapUv:re&&D(p.specularColorMap.channel),specularIntensityMapUv:Ue&&D(p.specularIntensityMap.channel),transmissionMapUv:v&&D(p.transmissionMap.channel),thicknessMapUv:j&&D(p.thicknessMap.channel),alphaMapUv:ce&&D(p.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(ue||tt),vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!$.attributes.uv&&(ye||ce),fog:!!Y,useFog:p.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:p.flatShading===!0&&p.wireframe===!1,sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:E,reversedDepthBuffer:le,skinning:X.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:Be,numDirLights:d.directional.length,numPointLights:d.point.length,numSpotLights:d.spot.length,numSpotLightMaps:d.spotLightMap.length,numRectAreaLights:d.rectArea.length,numHemiLights:d.hemi.length,numDirLightShadows:d.directionalShadowMap.length,numPointLightShadows:d.pointShadowMap.length,numSpotLightShadows:d.spotShadowMap.length,numSpotLightShadowsWithMaps:d.numSpotLightShadowsWithMaps,numLightProbes:d.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:p.dithering,shadowMapEnabled:e.shadowMap.enabled&&C.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pe,decodeVideoTexture:ye&&p.map.isVideoTexture===!0&&nt.getTransfer(p.map.colorSpace)===Ye,decodeVideoTextureEmissive:pe&&p.emissiveMap.isVideoTexture===!0&&nt.getTransfer(p.emissiveMap.colorSpace)===Ye,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===xt,flipSided:p.side===St,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionClipCullDistance:de&&p.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&p.extensions.multiDraw===!0||Ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()};return We.vertexUv1s=g.has(1),We.vertexUv2s=g.has(2),We.vertexUv3s=g.has(3),g.clear(),We}function r(p){const d=[];if(p.shaderID?d.push(p.shaderID):(d.push(p.customVertexShaderID),d.push(p.customFragmentShaderID)),p.defines!==void 0)for(const C in p.defines)d.push(C),d.push(p.defines[C]);return p.isRawShaderMaterial===!1&&(U(d,p),R(d,p),d.push(e.outputColorSpace)),d.push(p.customProgramCacheKey),d.join()}function U(p,d){p.push(d.precision),p.push(d.outputColorSpace),p.push(d.envMapMode),p.push(d.envMapCubeUVHeight),p.push(d.mapUv),p.push(d.alphaMapUv),p.push(d.lightMapUv),p.push(d.aoMapUv),p.push(d.bumpMapUv),p.push(d.normalMapUv),p.push(d.displacementMapUv),p.push(d.emissiveMapUv),p.push(d.metalnessMapUv),p.push(d.roughnessMapUv),p.push(d.anisotropyMapUv),p.push(d.clearcoatMapUv),p.push(d.clearcoatNormalMapUv),p.push(d.clearcoatRoughnessMapUv),p.push(d.iridescenceMapUv),p.push(d.iridescenceThicknessMapUv),p.push(d.sheenColorMapUv),p.push(d.sheenRoughnessMapUv),p.push(d.specularMapUv),p.push(d.specularColorMapUv),p.push(d.specularIntensityMapUv),p.push(d.transmissionMapUv),p.push(d.thicknessMapUv),p.push(d.combine),p.push(d.fogExp2),p.push(d.sizeAttenuation),p.push(d.morphTargetsCount),p.push(d.morphAttributeCount),p.push(d.numDirLights),p.push(d.numPointLights),p.push(d.numSpotLights),p.push(d.numSpotLightMaps),p.push(d.numHemiLights),p.push(d.numRectAreaLights),p.push(d.numDirLightShadows),p.push(d.numPointLightShadows),p.push(d.numSpotLightShadows),p.push(d.numSpotLightShadowsWithMaps),p.push(d.numLightProbes),p.push(d.shadowMapType),p.push(d.toneMapping),p.push(d.numClippingPlanes),p.push(d.numClipIntersection),p.push(d.depthPacking)}function R(p,d){f.disableAll(),d.supportsVertexTextures&&f.enable(0),d.instancing&&f.enable(1),d.instancingColor&&f.enable(2),d.instancingMorph&&f.enable(3),d.matcap&&f.enable(4),d.envMap&&f.enable(5),d.normalMapObjectSpace&&f.enable(6),d.normalMapTangentSpace&&f.enable(7),d.clearcoat&&f.enable(8),d.iridescence&&f.enable(9),d.alphaTest&&f.enable(10),d.vertexColors&&f.enable(11),d.vertexAlphas&&f.enable(12),d.vertexUv1s&&f.enable(13),d.vertexUv2s&&f.enable(14),d.vertexUv3s&&f.enable(15),d.vertexTangents&&f.enable(16),d.anisotropy&&f.enable(17),d.alphaHash&&f.enable(18),d.batching&&f.enable(19),d.dispersion&&f.enable(20),d.batchingColor&&f.enable(21),d.gradientMap&&f.enable(22),p.push(f.mask),f.disableAll(),d.fog&&f.enable(0),d.useFog&&f.enable(1),d.flatShading&&f.enable(2),d.logarithmicDepthBuffer&&f.enable(3),d.reversedDepthBuffer&&f.enable(4),d.skinning&&f.enable(5),d.morphTargets&&f.enable(6),d.morphNormals&&f.enable(7),d.morphColors&&f.enable(8),d.premultipliedAlpha&&f.enable(9),d.shadowMapEnabled&&f.enable(10),d.doubleSided&&f.enable(11),d.flipSided&&f.enable(12),d.useDepthPacking&&f.enable(13),d.dithering&&f.enable(14),d.transmission&&f.enable(15),d.sheen&&f.enable(16),d.opaque&&f.enable(17),d.pointsUvs&&f.enable(18),d.decodeVideoTexture&&f.enable(19),d.decodeVideoTextureEmissive&&f.enable(20),d.alphaToCoverage&&f.enable(21),p.push(f.mask)}function _(p){const d=O[p.type];let C;if(d){const B=Tt[d];C=Ba.clone(B.uniforms)}else C=p.uniforms;return C}function y(p,d){let C;for(let B=0,X=P.length;B<X;B++){const Y=P[B];if(Y.cacheKey===d){C=Y,++C.usedTimes;break}}return C===void 0&&(C=new Pf(e,d,p,o),P.push(C)),C}function b(p){if(--p.usedTimes===0){const d=P.indexOf(p);P[d]=P[P.length-1],P.pop(),p.destroy()}}function N(p){x.remove(p)}function z(){x.dispose()}return{getParameters:l,getProgramCacheKey:r,getUniforms:_,acquireProgram:y,releaseProgram:b,releaseShaderCache:N,programs:P,dispose:z}}function If(){let e=new WeakMap;function n(h){return e.has(h)}function t(h){let f=e.get(h);return f===void 0&&(f={},e.set(h,f)),f}function i(h){e.delete(h)}function s(h,f,x){e.get(h)[f]=x}function o(){e=new WeakMap}return{has:n,get:t,remove:i,update:s,dispose:o}}function Nf(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function cr(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function lr(){const e=[];let n=0;const t=[],i=[],s=[];function o(){n=0,t.length=0,i.length=0,s.length=0}function h(E,S,A,O,D,l){let r=e[n];return r===void 0?(r={id:E.id,object:E,geometry:S,material:A,groupOrder:O,renderOrder:E.renderOrder,z:D,group:l},e[n]=r):(r.id=E.id,r.object=E,r.geometry=S,r.material=A,r.groupOrder=O,r.renderOrder=E.renderOrder,r.z=D,r.group=l),n++,r}function f(E,S,A,O,D,l){const r=h(E,S,A,O,D,l);A.transmission>0?i.push(r):A.transparent===!0?s.push(r):t.push(r)}function x(E,S,A,O,D,l){const r=h(E,S,A,O,D,l);A.transmission>0?i.unshift(r):A.transparent===!0?s.unshift(r):t.unshift(r)}function g(E,S){t.length>1&&t.sort(E||Nf),i.length>1&&i.sort(S||cr),s.length>1&&s.sort(S||cr)}function P(){for(let E=n,S=e.length;E<S;E++){const A=e[E];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:t,transmissive:i,transparent:s,init:o,push:f,unshift:x,finish:P,sort:g}}function yf(){let e=new WeakMap;function n(i,s){const o=e.get(i);let h;return o===void 0?(h=new lr,e.set(i,[h])):s>=o.length?(h=new lr,o.push(h)):h=o[s],h}function t(){e=new WeakMap}return{get:n,dispose:t}}function Ff(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new He,color:new $e};break;case"SpotLight":t={position:new He,direction:new He,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new He,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new He,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new He,halfWidth:new He,halfHeight:new He};break}return e[n.id]=t,t}}}function Of(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let Bf=0;function Gf(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function Hf(e){const n=new Ff,t=Of(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)i.probe.push(new He);const s=new He,o=new Jt,h=new Jt;function f(g){let P=0,E=0,S=0;for(let p=0;p<9;p++)i.probe[p].set(0,0,0);let A=0,O=0,D=0,l=0,r=0,U=0,R=0,_=0,y=0,b=0,N=0;g.sort(Gf);for(let p=0,d=g.length;p<d;p++){const C=g[p],B=C.color,X=C.intensity,Y=C.distance,$=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)P+=B.r*X,E+=B.g*X,S+=B.b*X;else if(C.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(C.sh.coefficients[W],X);N++}else if(C.isDirectionalLight){const W=n.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const ne=C.shadow,H=t.get(C);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,i.directionalShadow[A]=H,i.directionalShadowMap[A]=$,i.directionalShadowMatrix[A]=C.shadow.matrix,U++}i.directional[A]=W,A++}else if(C.isSpotLight){const W=n.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(B).multiplyScalar(X),W.distance=Y,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,i.spot[D]=W;const ne=C.shadow;if(C.map&&(i.spotLightMap[y]=C.map,y++,ne.updateMatrices(C),C.castShadow&&b++),i.spotLightMatrix[D]=ne.matrix,C.castShadow){const H=t.get(C);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,i.spotShadow[D]=H,i.spotShadowMap[D]=$,_++}D++}else if(C.isRectAreaLight){const W=n.get(C);W.color.copy(B).multiplyScalar(X),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),i.rectArea[l]=W,l++}else if(C.isPointLight){const W=n.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){const ne=C.shadow,H=t.get(C);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,H.shadowCameraNear=ne.camera.near,H.shadowCameraFar=ne.camera.far,i.pointShadow[O]=H,i.pointShadowMap[O]=$,i.pointShadowMatrix[O]=C.shadow.matrix,R++}i.point[O]=W,O++}else if(C.isHemisphereLight){const W=n.get(C);W.skyColor.copy(C.color).multiplyScalar(X),W.groundColor.copy(C.groundColor).multiplyScalar(X),i.hemi[r]=W,r++}}l>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2)),i.ambient[0]=P,i.ambient[1]=E,i.ambient[2]=S;const z=i.hash;(z.directionalLength!==A||z.pointLength!==O||z.spotLength!==D||z.rectAreaLength!==l||z.hemiLength!==r||z.numDirectionalShadows!==U||z.numPointShadows!==R||z.numSpotShadows!==_||z.numSpotMaps!==y||z.numLightProbes!==N)&&(i.directional.length=A,i.spot.length=D,i.rectArea.length=l,i.point.length=O,i.hemi.length=r,i.directionalShadow.length=U,i.directionalShadowMap.length=U,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=U,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=_+y-b,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=N,z.directionalLength=A,z.pointLength=O,z.spotLength=D,z.rectAreaLength=l,z.hemiLength=r,z.numDirectionalShadows=U,z.numPointShadows=R,z.numSpotShadows=_,z.numSpotMaps=y,z.numLightProbes=N,i.version=Bf++)}function x(g,P){let E=0,S=0,A=0,O=0,D=0;const l=P.matrixWorldInverse;for(let r=0,U=g.length;r<U;r++){const R=g[r];if(R.isDirectionalLight){const _=i.directional[E];_.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(l),E++}else if(R.isSpotLight){const _=i.spot[A];_.position.setFromMatrixPosition(R.matrixWorld),_.position.applyMatrix4(l),_.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(l),A++}else if(R.isRectAreaLight){const _=i.rectArea[O];_.position.setFromMatrixPosition(R.matrixWorld),_.position.applyMatrix4(l),h.identity(),o.copy(R.matrixWorld),o.premultiply(l),h.extractRotation(o),_.halfWidth.set(R.width*.5,0,0),_.halfHeight.set(0,R.height*.5,0),_.halfWidth.applyMatrix4(h),_.halfHeight.applyMatrix4(h),O++}else if(R.isPointLight){const _=i.point[S];_.position.setFromMatrixPosition(R.matrixWorld),_.position.applyMatrix4(l),S++}else if(R.isHemisphereLight){const _=i.hemi[D];_.direction.setFromMatrixPosition(R.matrixWorld),_.direction.transformDirection(l),D++}}}return{setup:f,setupView:x,state:i}}function fr(e){const n=new Hf(e),t=[],i=[];function s(P){g.camera=P,t.length=0,i.length=0}function o(P){t.push(P)}function h(P){i.push(P)}function f(){n.setup(t)}function x(P){n.setupView(t,P)}const g={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:s,state:g,setupLights:f,setupLightsView:x,pushLight:o,pushShadow:h}}function Vf(e){let n=new WeakMap;function t(s,o=0){const h=n.get(s);let f;return h===void 0?(f=new fr(e),n.set(s,[f])):o>=h.length?(f=new fr(e),h.push(f)):f=h[o],f}function i(){n=new WeakMap}return{get:t,dispose:i}}const kf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Wf(e,n,t){let i=new ur;const s=new pt,o=new pt,h=new dt,f=new xa({depthPacking:Aa}),x=new Ra,g={},P=t.maxTextureSize,E={[jt]:St,[St]:jt,[xt]:xt},S=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:kf,fragmentShader:zf}),A=S.clone();A.defines.HORIZONTAL_PASS=1;const O=new Zn;O.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new ut(O,S),l=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mr;let r=this.type;this.render=function(b,N,z){if(l.enabled===!1||l.autoUpdate===!1&&l.needsUpdate===!1||b.length===0)return;const p=e.getRenderTarget(),d=e.getActiveCubeFace(),C=e.getActiveMipmapLevel(),B=e.state;B.setBlending(yt),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const X=r!==Rt&&this.type===Rt,Y=r===Rt&&this.type!==Rt;for(let $=0,W=b.length;$<W;$++){const ne=b[$],H=ne.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ve=H.getFrameExtents();if(s.multiply(ve),o.copy(H.mapSize),(s.x>P||s.y>P)&&(s.x>P&&(o.x=Math.floor(P/ve.x),s.x=o.x*ve.x,H.mapSize.x=o.x),s.y>P&&(o.y=Math.floor(P/ve.y),s.y=o.y*ve.y,H.mapSize.y=o.y)),H.map===null||X===!0||Y===!0){const De=this.type!==Rt?{minFilter:Zt,magFilter:Zt}:{};H.map!==null&&H.map.dispose(),H.map=new zt(s.x,s.y,De),H.map.texture.name=ne.name+".shadowMap",H.camera.updateProjectionMatrix()}e.setRenderTarget(H.map),e.clear();const Te=H.getViewportCount();for(let De=0;De<Te;De++){const Be=H.getViewport(De);h.set(o.x*Be.x,o.y*Be.y,o.x*Be.z,o.y*Be.w),B.viewport(h),H.updateMatrices(ne,De),i=H.getFrustum(),_(N,z,H.camera,ne,this.type)}H.isPointLightShadow!==!0&&this.type===Rt&&U(H,z),H.needsUpdate=!1}r=this.type,l.needsUpdate=!1,e.setRenderTarget(p,d,C)};function U(b,N){const z=n.update(D);S.defines.VSM_SAMPLES!==b.blurSamples&&(S.defines.VSM_SAMPLES=b.blurSamples,A.defines.VSM_SAMPLES=b.blurSamples,S.needsUpdate=!0,A.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new zt(s.x,s.y)),S.uniforms.shadow_pass.value=b.map.texture,S.uniforms.resolution.value=b.mapSize,S.uniforms.radius.value=b.radius,e.setRenderTarget(b.mapPass),e.clear(),e.renderBufferDirect(N,null,z,S,D,null),A.uniforms.shadow_pass.value=b.mapPass.texture,A.uniforms.resolution.value=b.mapSize,A.uniforms.radius.value=b.radius,e.setRenderTarget(b.map),e.clear(),e.renderBufferDirect(N,null,z,A,D,null)}function R(b,N,z,p){let d=null;const C=z.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)d=C;else if(d=z.isPointLight===!0?x:f,e.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const B=d.uuid,X=N.uuid;let Y=g[B];Y===void 0&&(Y={},g[B]=Y);let $=Y[X];$===void 0&&($=d.clone(),Y[X]=$,N.addEventListener("dispose",y)),d=$}if(d.visible=N.visible,d.wireframe=N.wireframe,p===Rt?d.side=N.shadowSide!==null?N.shadowSide:N.side:d.side=N.shadowSide!==null?N.shadowSide:E[N.side],d.alphaMap=N.alphaMap,d.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,d.map=N.map,d.clipShadows=N.clipShadows,d.clippingPlanes=N.clippingPlanes,d.clipIntersection=N.clipIntersection,d.displacementMap=N.displacementMap,d.displacementScale=N.displacementScale,d.displacementBias=N.displacementBias,d.wireframeLinewidth=N.wireframeLinewidth,d.linewidth=N.linewidth,z.isPointLight===!0&&d.isMeshDistanceMaterial===!0){const B=e.properties.get(d);B.light=z}return d}function _(b,N,z,p,d){if(b.visible===!1)return;if(b.layers.test(N.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&d===Rt)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld);const X=n.update(b),Y=b.material;if(Array.isArray(Y)){const $=X.groups;for(let W=0,ne=$.length;W<ne;W++){const H=$[W],ve=Y[H.materialIndex];if(ve&&ve.visible){const Te=R(b,ve,p,d);b.onBeforeShadow(e,b,N,z,X,Te,H),e.renderBufferDirect(z,null,X,Te,b,H),b.onAfterShadow(e,b,N,z,X,Te,H)}}}else if(Y.visible){const $=R(b,Y,p,d);b.onBeforeShadow(e,b,N,z,X,$,null),e.renderBufferDirect(z,null,X,$,b,null),b.onAfterShadow(e,b,N,z,X,$,null)}}const B=b.children;for(let X=0,Y=B.length;X<Y;X++)_(B[X],N,z,p,d)}function y(b){b.target.removeEventListener("dispose",y);for(const z in g){const p=g[z],d=b.target.uuid;d in p&&(p[d].dispose(),delete p[d])}}}const Xf={[Xn]:Wn,[zn]:Hn,[kn]:Gn,[vn]:Vn,[Wn]:Xn,[Hn]:zn,[Gn]:kn,[Vn]:vn};function Yf(e,n){function t(){let v=!1;const j=new dt;let te=null;const ce=new dt(0,0,0,0);return{setMask:function(Z){te!==Z&&!v&&(e.colorMask(Z,Z,Z,Z),te=Z)},setLocked:function(Z){v=Z},setClear:function(Z,k,de,Pe,We){We===!0&&(Z*=Pe,k*=Pe,de*=Pe),j.set(Z,k,de,Pe),ce.equals(j)===!1&&(e.clearColor(Z,k,de,Pe),ce.copy(j))},reset:function(){v=!1,te=null,ce.set(-1,0,0,0)}}}function i(){let v=!1,j=!1,te=null,ce=null,Z=null;return{setReversed:function(k){if(j!==k){const de=n.get("EXT_clip_control");k?de.clipControlEXT(de.LOWER_LEFT_EXT,de.ZERO_TO_ONE_EXT):de.clipControlEXT(de.LOWER_LEFT_EXT,de.NEGATIVE_ONE_TO_ONE_EXT),j=k;const Pe=Z;Z=null,this.setClear(Pe)}},getReversed:function(){return j},setTest:function(k){k?K(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(k){te!==k&&!v&&(e.depthMask(k),te=k)},setFunc:function(k){if(j&&(k=Xf[k]),ce!==k){switch(k){case Xn:e.depthFunc(e.NEVER);break;case Wn:e.depthFunc(e.ALWAYS);break;case zn:e.depthFunc(e.LESS);break;case vn:e.depthFunc(e.LEQUAL);break;case kn:e.depthFunc(e.EQUAL);break;case Vn:e.depthFunc(e.GEQUAL);break;case Hn:e.depthFunc(e.GREATER);break;case Gn:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ce=k}},setLocked:function(k){v=k},setClear:function(k){Z!==k&&(j&&(k=1-k),e.clearDepth(k),Z=k)},reset:function(){v=!1,te=null,ce=null,Z=null,j=!1}}}function s(){let v=!1,j=null,te=null,ce=null,Z=null,k=null,de=null,Pe=null,We=null;return{setTest:function(Ge){v||(Ge?K(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(Ge){j!==Ge&&!v&&(e.stencilMask(Ge),j=Ge)},setFunc:function(Ge,At,Mt){(te!==Ge||ce!==At||Z!==Mt)&&(e.stencilFunc(Ge,At,Mt),te=Ge,ce=At,Z=Mt)},setOp:function(Ge,At,Mt){(k!==Ge||de!==At||Pe!==Mt)&&(e.stencilOp(Ge,At,Mt),k=Ge,de=At,Pe=Mt)},setLocked:function(Ge){v=Ge},setClear:function(Ge){We!==Ge&&(e.clearStencil(Ge),We=Ge)},reset:function(){v=!1,j=null,te=null,ce=null,Z=null,k=null,de=null,Pe=null,We=null}}}const o=new t,h=new i,f=new s,x=new WeakMap,g=new WeakMap;let P={},E={},S=new WeakMap,A=[],O=null,D=!1,l=null,r=null,U=null,R=null,_=null,y=null,b=null,N=new $e(0,0,0),z=0,p=!1,d=null,C=null,B=null,X=null,Y=null;const $=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ne=0;const H=e.getParameter(e.VERSION);H.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=ne>=1):H.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=ne>=2);let ve=null,Te={};const De=e.getParameter(e.SCISSOR_BOX),Be=e.getParameter(e.VIEWPORT),et=new dt().fromArray(De),Je=new dt().fromArray(Be);function ke(v,j,te,ce){const Z=new Uint8Array(4),k=e.createTexture();e.bindTexture(v,k),e.texParameteri(v,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(v,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let de=0;de<te;de++)v===e.TEXTURE_3D||v===e.TEXTURE_2D_ARRAY?e.texImage3D(j,0,e.RGBA,1,1,ce,0,e.RGBA,e.UNSIGNED_BYTE,Z):e.texImage2D(j+de,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Z);return k}const V={};V[e.TEXTURE_2D]=ke(e.TEXTURE_2D,e.TEXTURE_2D,1),V[e.TEXTURE_CUBE_MAP]=ke(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[e.TEXTURE_2D_ARRAY]=ke(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),V[e.TEXTURE_3D]=ke(e.TEXTURE_3D,e.TEXTURE_3D,1,1),o.setClear(0,0,0,1),h.setClear(1),f.setClear(0),K(e.DEPTH_TEST),h.setFunc(vn),Re(!1),ue(Ni),K(e.CULL_FACE),qe(yt);function K(v){P[v]!==!0&&(e.enable(v),P[v]=!0)}function le(v){P[v]!==!1&&(e.disable(v),P[v]=!1)}function be(v,j){return E[v]!==j?(e.bindFramebuffer(v,j),E[v]=j,v===e.DRAW_FRAMEBUFFER&&(E[e.FRAMEBUFFER]=j),v===e.FRAMEBUFFER&&(E[e.DRAW_FRAMEBUFFER]=j),!0):!1}function Ee(v,j){let te=A,ce=!1;if(v){te=S.get(j),te===void 0&&(te=[],S.set(j,te));const Z=v.textures;if(te.length!==Z.length||te[0]!==e.COLOR_ATTACHMENT0){for(let k=0,de=Z.length;k<de;k++)te[k]=e.COLOR_ATTACHMENT0+k;te.length=Z.length,ce=!0}}else te[0]!==e.BACK&&(te[0]=e.BACK,ce=!0);ce&&e.drawBuffers(te)}function ye(v){return O!==v?(e.useProgram(v),O=v,!0):!1}const ot={[qt]:e.FUNC_ADD,[$r]:e.FUNC_SUBTRACT,[Kr]:e.FUNC_REVERSE_SUBTRACT};ot[ao]=e.MIN,ot[oo]=e.MAX;const m={[fa]:e.ZERO,[la]:e.ONE,[ca]:e.SRC_COLOR,[sa]:e.SRC_ALPHA,[oa]:e.SRC_ALPHA_SATURATE,[aa]:e.DST_COLOR,[ra]:e.DST_ALPHA,[ia]:e.ONE_MINUS_SRC_COLOR,[na]:e.ONE_MINUS_SRC_ALPHA,[ta]:e.ONE_MINUS_DST_COLOR,[ea]:e.ONE_MINUS_DST_ALPHA,[jr]:e.CONSTANT_COLOR,[Jr]:e.ONE_MINUS_CONSTANT_COLOR,[Qr]:e.CONSTANT_ALPHA,[Zr]:e.ONE_MINUS_CONSTANT_ALPHA};function qe(v,j,te,ce,Z,k,de,Pe,We,Ge){if(v===yt){D===!0&&(le(e.BLEND),D=!1);return}if(D===!1&&(K(e.BLEND),D=!0),v!==Fa){if(v!==l||Ge!==p){if((r!==qt||_!==qt)&&(e.blendEquation(e.FUNC_ADD),r=qt,_=qt),Ge)switch(v){case hn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Oi:e.blendFunc(e.ONE,e.ONE);break;case Fi:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case yi:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case hn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Oi:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Fi:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yi:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}U=null,R=null,y=null,b=null,N.set(0,0,0),z=0,l=v,p=Ge}return}Z=Z||j,k=k||te,de=de||ce,(j!==r||Z!==_)&&(e.blendEquationSeparate(ot[j],ot[Z]),r=j,_=Z),(te!==U||ce!==R||k!==y||de!==b)&&(e.blendFuncSeparate(m[te],m[ce],m[k],m[de]),U=te,R=ce,y=k,b=de),(Pe.equals(N)===!1||We!==z)&&(e.blendColor(Pe.r,Pe.g,Pe.b,We),N.copy(Pe),z=We),l=v,p=!1}function Le(v,j){v.side===xt?le(e.CULL_FACE):K(e.CULL_FACE);let te=v.side===St;j&&(te=!te),Re(te),v.blending===hn&&v.transparent===!1?qe(yt):qe(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),h.setFunc(v.depthFunc),h.setTest(v.depthTest),h.setMask(v.depthWrite),o.setMask(v.colorWrite);const ce=v.stencilWrite;f.setTest(ce),ce&&(f.setMask(v.stencilWriteMask),f.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),f.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass)),pe(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?K(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function Re(v){d!==v&&(v?e.frontFace(e.CW):e.frontFace(e.CCW),d=v)}function ue(v){v!==Na?(K(e.CULL_FACE),v!==C&&(v===Ni?e.cullFace(e.BACK):v===ya?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):le(e.CULL_FACE),C=v}function Ke(v){v!==B&&(W&&e.lineWidth(v),B=v)}function pe(v,j,te){v?(K(e.POLYGON_OFFSET_FILL),(X!==j||Y!==te)&&(e.polygonOffset(j,te),X=j,Y=te)):le(e.POLYGON_OFFSET_FILL)}function we(v){v?K(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function at(v){v===void 0&&(v=e.TEXTURE0+$-1),ve!==v&&(e.activeTexture(v),ve=v)}function tt(v,j,te){te===void 0&&(ve===null?te=e.TEXTURE0+$-1:te=ve);let ce=Te[te];ce===void 0&&(ce={type:void 0,texture:void 0},Te[te]=ce),(ce.type!==v||ce.texture!==j)&&(ve!==te&&(e.activeTexture(te),ve=te),e.bindTexture(v,j||V[v]),ce.type=v,ce.texture=j)}function u(){const v=Te[ve];v!==void 0&&v.type!==void 0&&(e.bindTexture(v.type,null),v.type=void 0,v.texture=void 0)}function a(){try{e.compressedTexImage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function L(){try{e.compressedTexImage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function G(){try{e.texSubImage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function q(){try{e.texSubImage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function F(){try{e.compressedTexSubImage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ge(){try{e.compressedTexSubImage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ee(){try{e.texStorage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function he(){try{e.texStorage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function me(){try{e.texImage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function J(){try{e.texImage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function oe(v){et.equals(v)===!1&&(e.scissor(v.x,v.y,v.z,v.w),et.copy(v))}function Ae(v){Je.equals(v)===!1&&(e.viewport(v.x,v.y,v.z,v.w),Je.copy(v))}function _e(v,j){let te=g.get(j);te===void 0&&(te=new WeakMap,g.set(j,te));let ce=te.get(v);ce===void 0&&(ce=e.getUniformBlockIndex(j,v.name),te.set(v,ce))}function re(v,j){const ce=g.get(j).get(v);x.get(j)!==ce&&(e.uniformBlockBinding(j,ce,v.__bindingPointIndex),x.set(j,ce))}function Ue(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),h.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),P={},ve=null,Te={},E={},S=new WeakMap,A=[],O=null,D=!1,l=null,r=null,U=null,R=null,_=null,y=null,b=null,N=new $e(0,0,0),z=0,p=!1,d=null,C=null,B=null,X=null,Y=null,et.set(0,0,e.canvas.width,e.canvas.height),Je.set(0,0,e.canvas.width,e.canvas.height),o.reset(),h.reset(),f.reset()}return{buffers:{color:o,depth:h,stencil:f},enable:K,disable:le,bindFramebuffer:be,drawBuffers:Ee,useProgram:ye,setBlending:qe,setMaterial:Le,setFlipSided:Re,setCullFace:ue,setLineWidth:Ke,setPolygonOffset:pe,setScissorTest:we,activeTexture:at,bindTexture:tt,unbindTexture:u,compressedTexImage2D:a,compressedTexImage3D:L,texImage2D:me,texImage3D:J,updateUBOMapping:_e,uniformBlockBinding:re,texStorage2D:ee,texStorage3D:he,texSubImage2D:G,texSubImage3D:q,compressedTexSubImage2D:F,compressedTexSubImage3D:ge,scissor:oe,viewport:Ae,reset:Ue}}function qf(e,n,t,i,s,o,h){const f=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,x=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new pt,P=new WeakMap;let E;const S=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function O(u,a){return A?new OffscreenCanvas(u,a):to("canvas")}function D(u,a,L){let G=1;const q=tt(u);if((q.width>L||q.height>L)&&(G=L/Math.max(q.width,q.height)),G<1)if(typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&u instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&u instanceof ImageBitmap||typeof VideoFrame<"u"&&u instanceof VideoFrame){const F=Math.floor(G*q.width),ge=Math.floor(G*q.height);E===void 0&&(E=O(F,ge));const ee=a?O(F,ge):E;return ee.width=F,ee.height=ge,ee.getContext("2d").drawImage(u,0,0,F,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+F+"x"+ge+")."),ee}else return"data"in u&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),u;return u}function l(u){return u.generateMipmaps}function r(u){e.generateMipmap(u)}function U(u){return u.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:u.isWebGL3DRenderTarget?e.TEXTURE_3D:u.isWebGLArrayRenderTarget||u.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function R(u,a,L,G,q=!1){if(u!==null){if(e[u]!==void 0)return e[u];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+u+"'")}let F=a;if(a===e.RED&&(L===e.FLOAT&&(F=e.R32F),L===e.HALF_FLOAT&&(F=e.R16F),L===e.UNSIGNED_BYTE&&(F=e.R8)),a===e.RED_INTEGER&&(L===e.UNSIGNED_BYTE&&(F=e.R8UI),L===e.UNSIGNED_SHORT&&(F=e.R16UI),L===e.UNSIGNED_INT&&(F=e.R32UI),L===e.BYTE&&(F=e.R8I),L===e.SHORT&&(F=e.R16I),L===e.INT&&(F=e.R32I)),a===e.RG&&(L===e.FLOAT&&(F=e.RG32F),L===e.HALF_FLOAT&&(F=e.RG16F),L===e.UNSIGNED_BYTE&&(F=e.RG8)),a===e.RG_INTEGER&&(L===e.UNSIGNED_BYTE&&(F=e.RG8UI),L===e.UNSIGNED_SHORT&&(F=e.RG16UI),L===e.UNSIGNED_INT&&(F=e.RG32UI),L===e.BYTE&&(F=e.RG8I),L===e.SHORT&&(F=e.RG16I),L===e.INT&&(F=e.RG32I)),a===e.RGB_INTEGER&&(L===e.UNSIGNED_BYTE&&(F=e.RGB8UI),L===e.UNSIGNED_SHORT&&(F=e.RGB16UI),L===e.UNSIGNED_INT&&(F=e.RGB32UI),L===e.BYTE&&(F=e.RGB8I),L===e.SHORT&&(F=e.RGB16I),L===e.INT&&(F=e.RGB32I)),a===e.RGBA_INTEGER&&(L===e.UNSIGNED_BYTE&&(F=e.RGBA8UI),L===e.UNSIGNED_SHORT&&(F=e.RGBA16UI),L===e.UNSIGNED_INT&&(F=e.RGBA32UI),L===e.BYTE&&(F=e.RGBA8I),L===e.SHORT&&(F=e.RGBA16I),L===e.INT&&(F=e.RGBA32I)),a===e.RGB&&(L===e.UNSIGNED_INT_5_9_9_9_REV&&(F=e.RGB9_E5),L===e.UNSIGNED_INT_10F_11F_11F_REV&&(F=e.R11F_G11F_B10F)),a===e.RGBA){const ge=q?Cr:nt.getTransfer(G);L===e.FLOAT&&(F=e.RGBA32F),L===e.HALF_FLOAT&&(F=e.RGBA16F),L===e.UNSIGNED_BYTE&&(F=ge===Ye?e.SRGB8_ALPHA8:e.RGBA8),L===e.UNSIGNED_SHORT_4_4_4_4&&(F=e.RGBA4),L===e.UNSIGNED_SHORT_5_5_5_1&&(F=e.RGB5_A1)}return(F===e.R16F||F===e.R32F||F===e.RG16F||F===e.RG32F||F===e.RGBA16F||F===e.RGBA32F)&&n.get("EXT_color_buffer_float"),F}function _(u,a){let L;return u?a===null||a===tn||a===en?L=e.DEPTH24_STENCIL8:a===Nt?L=e.DEPTH32F_STENCIL8:a===gn&&(L=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):a===null||a===tn||a===en?L=e.DEPTH_COMPONENT24:a===Nt?L=e.DEPTH_COMPONENT32F:a===gn&&(L=e.DEPTH_COMPONENT16),L}function y(u,a){return l(u)===!0||u.isFramebufferTexture&&u.minFilter!==Zt&&u.minFilter!==Vt?Math.log2(Math.max(a.width,a.height))+1:u.mipmaps!==void 0&&u.mipmaps.length>0?u.mipmaps.length:u.isCompressedTexture&&Array.isArray(u.image)?a.mipmaps.length:1}function b(u){const a=u.target;a.removeEventListener("dispose",b),z(a),a.isVideoTexture&&P.delete(a)}function N(u){const a=u.target;a.removeEventListener("dispose",N),d(a)}function z(u){const a=i.get(u);if(a.__webglInit===void 0)return;const L=u.source,G=S.get(L);if(G){const q=G[a.__cacheKey];q.usedTimes--,q.usedTimes===0&&p(u),Object.keys(G).length===0&&S.delete(L)}i.remove(u)}function p(u){const a=i.get(u);e.deleteTexture(a.__webglTexture);const L=u.source,G=S.get(L);delete G[a.__cacheKey],h.memory.textures--}function d(u){const a=i.get(u);if(u.depthTexture&&(u.depthTexture.dispose(),i.remove(u.depthTexture)),u.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(a.__webglFramebuffer[G]))for(let q=0;q<a.__webglFramebuffer[G].length;q++)e.deleteFramebuffer(a.__webglFramebuffer[G][q]);else e.deleteFramebuffer(a.__webglFramebuffer[G]);a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer[G])}else{if(Array.isArray(a.__webglFramebuffer))for(let G=0;G<a.__webglFramebuffer.length;G++)e.deleteFramebuffer(a.__webglFramebuffer[G]);else e.deleteFramebuffer(a.__webglFramebuffer);if(a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer),a.__webglMultisampledFramebuffer&&e.deleteFramebuffer(a.__webglMultisampledFramebuffer),a.__webglColorRenderbuffer)for(let G=0;G<a.__webglColorRenderbuffer.length;G++)a.__webglColorRenderbuffer[G]&&e.deleteRenderbuffer(a.__webglColorRenderbuffer[G]);a.__webglDepthRenderbuffer&&e.deleteRenderbuffer(a.__webglDepthRenderbuffer)}const L=u.textures;for(let G=0,q=L.length;G<q;G++){const F=i.get(L[G]);F.__webglTexture&&(e.deleteTexture(F.__webglTexture),h.memory.textures--),i.remove(L[G])}i.remove(u)}let C=0;function B(){C=0}function X(){const u=C;return u>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+u+" texture units while this GPU supports only "+s.maxTextures),C+=1,u}function Y(u){const a=[];return a.push(u.wrapS),a.push(u.wrapT),a.push(u.wrapR||0),a.push(u.magFilter),a.push(u.minFilter),a.push(u.anisotropy),a.push(u.internalFormat),a.push(u.format),a.push(u.type),a.push(u.generateMipmaps),a.push(u.premultiplyAlpha),a.push(u.flipY),a.push(u.unpackAlignment),a.push(u.colorSpace),a.join()}function $(u,a){const L=i.get(u);if(u.isVideoTexture&&we(u),u.isRenderTargetTexture===!1&&u.isExternalTexture!==!0&&u.version>0&&L.__version!==u.version){const G=u.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(L,u,a);return}}else u.isExternalTexture&&(L.__webglTexture=u.sourceTexture?u.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,L.__webglTexture,e.TEXTURE0+a)}function W(u,a){const L=i.get(u);if(u.isRenderTargetTexture===!1&&u.version>0&&L.__version!==u.version){V(L,u,a);return}t.bindTexture(e.TEXTURE_2D_ARRAY,L.__webglTexture,e.TEXTURE0+a)}function ne(u,a){const L=i.get(u);if(u.isRenderTargetTexture===!1&&u.version>0&&L.__version!==u.version){V(L,u,a);return}t.bindTexture(e.TEXTURE_3D,L.__webglTexture,e.TEXTURE0+a)}function H(u,a){const L=i.get(u);if(u.version>0&&L.__version!==u.version){K(L,u,a);return}t.bindTexture(e.TEXTURE_CUBE_MAP,L.__webglTexture,e.TEXTURE0+a)}const ve={[pa]:e.REPEAT,[ua]:e.CLAMP_TO_EDGE,[da]:e.MIRRORED_REPEAT},Te={[Zt]:e.NEAREST,[ha]:e.NEAREST_MIPMAP_NEAREST,[on]:e.NEAREST_MIPMAP_LINEAR,[Vt]:e.LINEAR,[bn]:e.LINEAR_MIPMAP_NEAREST,[Kt]:e.LINEAR_MIPMAP_LINEAR},De={[Ma]:e.NEVER,[Sa]:e.ALWAYS,[Ea]:e.LESS,[hr]:e.LEQUAL,[ga]:e.EQUAL,[va]:e.GEQUAL,[_a]:e.GREATER,[ma]:e.NOTEQUAL};function Be(u,a){if(a.type===Nt&&n.has("OES_texture_float_linear")===!1&&(a.magFilter===Vt||a.magFilter===bn||a.magFilter===on||a.magFilter===Kt||a.minFilter===Vt||a.minFilter===bn||a.minFilter===on||a.minFilter===Kt)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(u,e.TEXTURE_WRAP_S,ve[a.wrapS]),e.texParameteri(u,e.TEXTURE_WRAP_T,ve[a.wrapT]),(u===e.TEXTURE_3D||u===e.TEXTURE_2D_ARRAY)&&e.texParameteri(u,e.TEXTURE_WRAP_R,ve[a.wrapR]),e.texParameteri(u,e.TEXTURE_MAG_FILTER,Te[a.magFilter]),e.texParameteri(u,e.TEXTURE_MIN_FILTER,Te[a.minFilter]),a.compareFunction&&(e.texParameteri(u,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(u,e.TEXTURE_COMPARE_FUNC,De[a.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(a.magFilter===Zt||a.minFilter!==on&&a.minFilter!==Kt||a.type===Nt&&n.has("OES_texture_float_linear")===!1)return;if(a.anisotropy>1||i.get(a).__currentAnisotropy){const L=n.get("EXT_texture_filter_anisotropic");e.texParameterf(u,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,s.getMaxAnisotropy())),i.get(a).__currentAnisotropy=a.anisotropy}}}function et(u,a){let L=!1;u.__webglInit===void 0&&(u.__webglInit=!0,a.addEventListener("dispose",b));const G=a.source;let q=S.get(G);q===void 0&&(q={},S.set(G,q));const F=Y(a);if(F!==u.__cacheKey){q[F]===void 0&&(q[F]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,L=!0),q[F].usedTimes++;const ge=q[u.__cacheKey];ge!==void 0&&(q[u.__cacheKey].usedTimes--,ge.usedTimes===0&&p(a)),u.__cacheKey=F,u.__webglTexture=q[F].texture}return L}function Je(u,a,L){return Math.floor(Math.floor(u/L)/a)}function ke(u,a,L,G){const F=u.updateRanges;if(F.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,a.width,a.height,L,G,a.data);else{F.sort((J,oe)=>J.start-oe.start);let ge=0;for(let J=1;J<F.length;J++){const oe=F[ge],Ae=F[J],_e=oe.start+oe.count,re=Je(Ae.start,a.width,4),Ue=Je(oe.start,a.width,4);Ae.start<=_e+1&&re===Ue&&Je(Ae.start+Ae.count-1,a.width,4)===re?oe.count=Math.max(oe.count,Ae.start+Ae.count-oe.start):(++ge,F[ge]=Ae)}F.length=ge+1;const ee=e.getParameter(e.UNPACK_ROW_LENGTH),he=e.getParameter(e.UNPACK_SKIP_PIXELS),me=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,a.width);for(let J=0,oe=F.length;J<oe;J++){const Ae=F[J],_e=Math.floor(Ae.start/4),re=Math.ceil(Ae.count/4),Ue=_e%a.width,v=Math.floor(_e/a.width),j=re,te=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ue),e.pixelStorei(e.UNPACK_SKIP_ROWS,v),t.texSubImage2D(e.TEXTURE_2D,0,Ue,v,j,te,L,G,a.data)}u.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ee),e.pixelStorei(e.UNPACK_SKIP_PIXELS,he),e.pixelStorei(e.UNPACK_SKIP_ROWS,me)}}function V(u,a,L){let G=e.TEXTURE_2D;(a.isDataArrayTexture||a.isCompressedArrayTexture)&&(G=e.TEXTURE_2D_ARRAY),a.isData3DTexture&&(G=e.TEXTURE_3D);const q=et(u,a),F=a.source;t.bindTexture(G,u.__webglTexture,e.TEXTURE0+L);const ge=i.get(F);if(F.version!==ge.__version||q===!0){t.activeTexture(e.TEXTURE0+L);const ee=nt.getPrimaries(nt.workingColorSpace),he=a.colorSpace===Ht?null:nt.getPrimaries(a.colorSpace),me=a.colorSpace===Ht||ee===he?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let J=D(a.image,!1,s.maxTextureSize);J=at(a,J);const oe=o.convert(a.format,a.colorSpace),Ae=o.convert(a.type);let _e=R(a.internalFormat,oe,Ae,a.colorSpace,a.isVideoTexture);Be(G,a);let re;const Ue=a.mipmaps,v=a.isVideoTexture!==!0,j=ge.__version===void 0||q===!0,te=F.dataReady,ce=y(a,J);if(a.isDepthTexture)_e=_(a.format===_n,a.type),j&&(v?t.texStorage2D(e.TEXTURE_2D,1,_e,J.width,J.height):t.texImage2D(e.TEXTURE_2D,0,_e,J.width,J.height,0,oe,Ae,null));else if(a.isDataTexture)if(Ue.length>0){v&&j&&t.texStorage2D(e.TEXTURE_2D,ce,_e,Ue[0].width,Ue[0].height);for(let Z=0,k=Ue.length;Z<k;Z++)re=Ue[Z],v?te&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,re.width,re.height,oe,Ae,re.data):t.texImage2D(e.TEXTURE_2D,Z,_e,re.width,re.height,0,oe,Ae,re.data);a.generateMipmaps=!1}else v?(j&&t.texStorage2D(e.TEXTURE_2D,ce,_e,J.width,J.height),te&&ke(a,J,oe,Ae)):t.texImage2D(e.TEXTURE_2D,0,_e,J.width,J.height,0,oe,Ae,J.data);else if(a.isCompressedTexture)if(a.isCompressedArrayTexture){v&&j&&t.texStorage3D(e.TEXTURE_2D_ARRAY,ce,_e,Ue[0].width,Ue[0].height,J.depth);for(let Z=0,k=Ue.length;Z<k;Z++)if(re=Ue[Z],a.format!==Ct)if(oe!==null)if(v){if(te)if(a.layerUpdates.size>0){const de=Gi(re.width,re.height,a.format,a.type);for(const Pe of a.layerUpdates){const We=re.data.subarray(Pe*de/re.data.BYTES_PER_ELEMENT,(Pe+1)*de/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,Pe,re.width,re.height,1,oe,We)}a.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,re.width,re.height,J.depth,oe,re.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Z,_e,re.width,re.height,J.depth,0,re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else v?te&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,re.width,re.height,J.depth,oe,Ae,re.data):t.texImage3D(e.TEXTURE_2D_ARRAY,Z,_e,re.width,re.height,J.depth,0,oe,Ae,re.data)}else{v&&j&&t.texStorage2D(e.TEXTURE_2D,ce,_e,Ue[0].width,Ue[0].height);for(let Z=0,k=Ue.length;Z<k;Z++)re=Ue[Z],a.format!==Ct?oe!==null?v?te&&t.compressedTexSubImage2D(e.TEXTURE_2D,Z,0,0,re.width,re.height,oe,re.data):t.compressedTexImage2D(e.TEXTURE_2D,Z,_e,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):v?te&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,re.width,re.height,oe,Ae,re.data):t.texImage2D(e.TEXTURE_2D,Z,_e,re.width,re.height,0,oe,Ae,re.data)}else if(a.isDataArrayTexture)if(v){if(j&&t.texStorage3D(e.TEXTURE_2D_ARRAY,ce,_e,J.width,J.height,J.depth),te)if(a.layerUpdates.size>0){const Z=Gi(J.width,J.height,a.format,a.type);for(const k of a.layerUpdates){const de=J.data.subarray(k*Z/J.data.BYTES_PER_ELEMENT,(k+1)*Z/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,k,J.width,J.height,1,oe,Ae,de)}a.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,oe,Ae,J.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,_e,J.width,J.height,J.depth,0,oe,Ae,J.data);else if(a.isData3DTexture)v?(j&&t.texStorage3D(e.TEXTURE_3D,ce,_e,J.width,J.height,J.depth),te&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,oe,Ae,J.data)):t.texImage3D(e.TEXTURE_3D,0,_e,J.width,J.height,J.depth,0,oe,Ae,J.data);else if(a.isFramebufferTexture){if(j)if(v)t.texStorage2D(e.TEXTURE_2D,ce,_e,J.width,J.height);else{let Z=J.width,k=J.height;for(let de=0;de<ce;de++)t.texImage2D(e.TEXTURE_2D,de,_e,Z,k,0,oe,Ae,null),Z>>=1,k>>=1}}else if(Ue.length>0){if(v&&j){const Z=tt(Ue[0]);t.texStorage2D(e.TEXTURE_2D,ce,_e,Z.width,Z.height)}for(let Z=0,k=Ue.length;Z<k;Z++)re=Ue[Z],v?te&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,oe,Ae,re):t.texImage2D(e.TEXTURE_2D,Z,_e,oe,Ae,re);a.generateMipmaps=!1}else if(v){if(j){const Z=tt(J);t.texStorage2D(e.TEXTURE_2D,ce,_e,Z.width,Z.height)}te&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,oe,Ae,J)}else t.texImage2D(e.TEXTURE_2D,0,_e,oe,Ae,J);l(a)&&r(G),ge.__version=F.version,a.onUpdate&&a.onUpdate(a)}u.__version=a.version}function K(u,a,L){if(a.image.length!==6)return;const G=et(u,a),q=a.source;t.bindTexture(e.TEXTURE_CUBE_MAP,u.__webglTexture,e.TEXTURE0+L);const F=i.get(q);if(q.version!==F.__version||G===!0){t.activeTexture(e.TEXTURE0+L);const ge=nt.getPrimaries(nt.workingColorSpace),ee=a.colorSpace===Ht?null:nt.getPrimaries(a.colorSpace),he=a.colorSpace===Ht||ge===ee?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const me=a.isCompressedTexture||a.image[0].isCompressedTexture,J=a.image[0]&&a.image[0].isDataTexture,oe=[];for(let k=0;k<6;k++)!me&&!J?oe[k]=D(a.image[k],!0,s.maxCubemapSize):oe[k]=J?a.image[k].image:a.image[k],oe[k]=at(a,oe[k]);const Ae=oe[0],_e=o.convert(a.format,a.colorSpace),re=o.convert(a.type),Ue=R(a.internalFormat,_e,re,a.colorSpace),v=a.isVideoTexture!==!0,j=F.__version===void 0||G===!0,te=q.dataReady;let ce=y(a,Ae);Be(e.TEXTURE_CUBE_MAP,a);let Z;if(me){v&&j&&t.texStorage2D(e.TEXTURE_CUBE_MAP,ce,Ue,Ae.width,Ae.height);for(let k=0;k<6;k++){Z=oe[k].mipmaps;for(let de=0;de<Z.length;de++){const Pe=Z[de];a.format!==Ct?_e!==null?v?te&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de,0,0,Pe.width,Pe.height,_e,Pe.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de,Ue,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):v?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de,0,0,Pe.width,Pe.height,_e,re,Pe.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de,Ue,Pe.width,Pe.height,0,_e,re,Pe.data)}}}else{if(Z=a.mipmaps,v&&j){Z.length>0&&ce++;const k=tt(oe[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,ce,Ue,k.width,k.height)}for(let k=0;k<6;k++)if(J){v?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,oe[k].width,oe[k].height,_e,re,oe[k].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Ue,oe[k].width,oe[k].height,0,_e,re,oe[k].data);for(let de=0;de<Z.length;de++){const We=Z[de].image[k].image;v?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de+1,0,0,We.width,We.height,_e,re,We.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de+1,Ue,We.width,We.height,0,_e,re,We.data)}}else{v?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,_e,re,oe[k]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Ue,_e,re,oe[k]);for(let de=0;de<Z.length;de++){const Pe=Z[de];v?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de+1,0,0,_e,re,Pe.image[k]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de+1,Ue,_e,re,Pe.image[k])}}}l(a)&&r(e.TEXTURE_CUBE_MAP),F.__version=q.version,a.onUpdate&&a.onUpdate(a)}u.__version=a.version}function le(u,a,L,G,q,F){const ge=o.convert(L.format,L.colorSpace),ee=o.convert(L.type),he=R(L.internalFormat,ge,ee,L.colorSpace),me=i.get(a),J=i.get(L);if(J.__renderTarget=a,!me.__hasExternalTextures){const oe=Math.max(1,a.width>>F),Ae=Math.max(1,a.height>>F);q===e.TEXTURE_3D||q===e.TEXTURE_2D_ARRAY?t.texImage3D(q,F,he,oe,Ae,a.depth,0,ge,ee,null):t.texImage2D(q,F,he,oe,Ae,0,ge,ee,null)}t.bindFramebuffer(e.FRAMEBUFFER,u),pe(a)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,G,q,J.__webglTexture,0,Ke(a)):(q===e.TEXTURE_2D||q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,G,q,J.__webglTexture,F),t.bindFramebuffer(e.FRAMEBUFFER,null)}function be(u,a,L){if(e.bindRenderbuffer(e.RENDERBUFFER,u),a.depthBuffer){const G=a.depthTexture,q=G&&G.isDepthTexture?G.type:null,F=_(a.stencilBuffer,q),ge=a.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ee=Ke(a);pe(a)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ee,F,a.width,a.height):L?e.renderbufferStorageMultisample(e.RENDERBUFFER,ee,F,a.width,a.height):e.renderbufferStorage(e.RENDERBUFFER,F,a.width,a.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ge,e.RENDERBUFFER,u)}else{const G=a.textures;for(let q=0;q<G.length;q++){const F=G[q],ge=o.convert(F.format,F.colorSpace),ee=o.convert(F.type),he=R(F.internalFormat,ge,ee,F.colorSpace),me=Ke(a);L&&pe(a)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,me,he,a.width,a.height):pe(a)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,me,he,a.width,a.height):e.renderbufferStorage(e.RENDERBUFFER,he,a.width,a.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ee(u,a){if(a&&a.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,u),!(a.depthTexture&&a.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(a.depthTexture);G.__renderTarget=a,(!G.__webglTexture||a.depthTexture.image.width!==a.width||a.depthTexture.image.height!==a.height)&&(a.depthTexture.image.width=a.width,a.depthTexture.image.height=a.height,a.depthTexture.needsUpdate=!0),$(a.depthTexture,0);const q=G.__webglTexture,F=Ke(a);if(a.depthTexture.format===$n)pe(a)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,q,0,F):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,q,0);else if(a.depthTexture.format===_n)pe(a)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,q,0,F):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function ye(u){const a=i.get(u),L=u.isWebGLCubeRenderTarget===!0;if(a.__boundDepthTexture!==u.depthTexture){const G=u.depthTexture;if(a.__depthDisposeCallback&&a.__depthDisposeCallback(),G){const q=()=>{delete a.__boundDepthTexture,delete a.__depthDisposeCallback,G.removeEventListener("dispose",q)};G.addEventListener("dispose",q),a.__depthDisposeCallback=q}a.__boundDepthTexture=G}if(u.depthTexture&&!a.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");const G=u.texture.mipmaps;G&&G.length>0?Ee(a.__webglFramebuffer[0],u):Ee(a.__webglFramebuffer,u)}else if(L){a.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[G]),a.__webglDepthbuffer[G]===void 0)a.__webglDepthbuffer[G]=e.createRenderbuffer(),be(a.__webglDepthbuffer[G],u,!1);else{const q=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,F=a.__webglDepthbuffer[G];e.bindRenderbuffer(e.RENDERBUFFER,F),e.framebufferRenderbuffer(e.FRAMEBUFFER,q,e.RENDERBUFFER,F)}}else{const G=u.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer),a.__webglDepthbuffer===void 0)a.__webglDepthbuffer=e.createRenderbuffer(),be(a.__webglDepthbuffer,u,!1);else{const q=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,F=a.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,F),e.framebufferRenderbuffer(e.FRAMEBUFFER,q,e.RENDERBUFFER,F)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function ot(u,a,L){const G=i.get(u);a!==void 0&&le(G.__webglFramebuffer,u,u.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),L!==void 0&&ye(u)}function m(u){const a=u.texture,L=i.get(u),G=i.get(a);u.addEventListener("dispose",N);const q=u.textures,F=u.isWebGLCubeRenderTarget===!0,ge=q.length>1;if(ge||(G.__webglTexture===void 0&&(G.__webglTexture=e.createTexture()),G.__version=a.version,h.memory.textures++),F){L.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(a.mipmaps&&a.mipmaps.length>0){L.__webglFramebuffer[ee]=[];for(let he=0;he<a.mipmaps.length;he++)L.__webglFramebuffer[ee][he]=e.createFramebuffer()}else L.__webglFramebuffer[ee]=e.createFramebuffer()}else{if(a.mipmaps&&a.mipmaps.length>0){L.__webglFramebuffer=[];for(let ee=0;ee<a.mipmaps.length;ee++)L.__webglFramebuffer[ee]=e.createFramebuffer()}else L.__webglFramebuffer=e.createFramebuffer();if(ge)for(let ee=0,he=q.length;ee<he;ee++){const me=i.get(q[ee]);me.__webglTexture===void 0&&(me.__webglTexture=e.createTexture(),h.memory.textures++)}if(u.samples>0&&pe(u)===!1){L.__webglMultisampledFramebuffer=e.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ee=0;ee<q.length;ee++){const he=q[ee];L.__webglColorRenderbuffer[ee]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,L.__webglColorRenderbuffer[ee]);const me=o.convert(he.format,he.colorSpace),J=o.convert(he.type),oe=R(he.internalFormat,me,J,he.colorSpace,u.isXRRenderTarget===!0),Ae=Ke(u);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae,oe,u.width,u.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ee,e.RENDERBUFFER,L.__webglColorRenderbuffer[ee])}e.bindRenderbuffer(e.RENDERBUFFER,null),u.depthBuffer&&(L.__webglDepthRenderbuffer=e.createRenderbuffer(),be(L.__webglDepthRenderbuffer,u,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(F){t.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture),Be(e.TEXTURE_CUBE_MAP,a);for(let ee=0;ee<6;ee++)if(a.mipmaps&&a.mipmaps.length>0)for(let he=0;he<a.mipmaps.length;he++)le(L.__webglFramebuffer[ee][he],u,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he);else le(L.__webglFramebuffer[ee],u,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);l(a)&&r(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let ee=0,he=q.length;ee<he;ee++){const me=q[ee],J=i.get(me);let oe=e.TEXTURE_2D;(u.isWebGL3DRenderTarget||u.isWebGLArrayRenderTarget)&&(oe=u.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(oe,J.__webglTexture),Be(oe,me),le(L.__webglFramebuffer,u,me,e.COLOR_ATTACHMENT0+ee,oe,0),l(me)&&r(oe)}t.unbindTexture()}else{let ee=e.TEXTURE_2D;if((u.isWebGL3DRenderTarget||u.isWebGLArrayRenderTarget)&&(ee=u.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ee,G.__webglTexture),Be(ee,a),a.mipmaps&&a.mipmaps.length>0)for(let he=0;he<a.mipmaps.length;he++)le(L.__webglFramebuffer[he],u,a,e.COLOR_ATTACHMENT0,ee,he);else le(L.__webglFramebuffer,u,a,e.COLOR_ATTACHMENT0,ee,0);l(a)&&r(ee),t.unbindTexture()}u.depthBuffer&&ye(u)}function qe(u){const a=u.textures;for(let L=0,G=a.length;L<G;L++){const q=a[L];if(l(q)){const F=U(u),ge=i.get(q).__webglTexture;t.bindTexture(F,ge),r(F),t.unbindTexture()}}}const Le=[],Re=[];function ue(u){if(u.samples>0){if(pe(u)===!1){const a=u.textures,L=u.width,G=u.height;let q=e.COLOR_BUFFER_BIT;const F=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ge=i.get(u),ee=a.length>1;if(ee)for(let me=0;me<a.length;me++)t.bindFramebuffer(e.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,ge.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const he=u.texture.mipmaps;he&&he.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let me=0;me<a.length;me++){if(u.resolveDepthBuffer&&(u.depthBuffer&&(q|=e.DEPTH_BUFFER_BIT),u.stencilBuffer&&u.resolveStencilBuffer&&(q|=e.STENCIL_BUFFER_BIT)),ee){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ge.__webglColorRenderbuffer[me]);const J=i.get(a[me]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,J,0)}e.blitFramebuffer(0,0,L,G,0,0,L,G,q,e.NEAREST),x===!0&&(Le.length=0,Re.length=0,Le.push(e.COLOR_ATTACHMENT0+me),u.depthBuffer&&u.resolveDepthBuffer===!1&&(Le.push(F),Re.push(F),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Re)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Le))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ee)for(let me=0;me<a.length;me++){t.bindFramebuffer(e.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.RENDERBUFFER,ge.__webglColorRenderbuffer[me]);const J=i.get(a[me]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,ge.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.TEXTURE_2D,J,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(u.depthBuffer&&u.resolveDepthBuffer===!1&&x){const a=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[a])}}}function Ke(u){return Math.min(s.maxSamples,u.samples)}function pe(u){const a=i.get(u);return u.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&a.__useRenderToTexture!==!1}function we(u){const a=h.render.frame;P.get(u)!==a&&(P.set(u,a),u.update())}function at(u,a){const L=u.colorSpace,G=u.format,q=u.type;return u.isCompressedTexture===!0||u.isVideoTexture===!0||L!==Sn&&L!==Ht&&(nt.getTransfer(L)===Ye?(G!==Ct||q!==Ft)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),a}function tt(u){return typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement?(g.width=u.naturalWidth||u.width,g.height=u.naturalHeight||u.height):typeof VideoFrame<"u"&&u instanceof VideoFrame?(g.width=u.displayWidth,g.height=u.displayHeight):(g.width=u.width,g.height=u.height),g}this.allocateTextureUnit=X,this.resetTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=ne,this.setTextureCube=H,this.rebindTextures=ot,this.setupRenderTarget=m,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=le,this.useMultisampledRTT=pe}function Kf(e,n){function t(i,s=Ht){let o;const h=nt.getTransfer(s);if(i===Ft)return e.UNSIGNED_BYTE;if(i===_r)return e.UNSIGNED_SHORT_4_4_4_4;if(i===vr)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Ca)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===ba)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Pa)return e.BYTE;if(i===La)return e.SHORT;if(i===gn)return e.UNSIGNED_SHORT;if(i===Er)return e.INT;if(i===tn)return e.UNSIGNED_INT;if(i===Nt)return e.FLOAT;if(i===En)return e.HALF_FLOAT;if(i===Ua)return e.ALPHA;if(i===Da)return e.RGB;if(i===Ct)return e.RGBA;if(i===$n)return e.DEPTH_COMPONENT;if(i===_n)return e.DEPTH_STENCIL;if(i===wa)return e.RED;if(i===Sr)return e.RED_INTEGER;if(i===Ia)return e.RG;if(i===Mr)return e.RG_INTEGER;if(i===Tr)return e.RGBA_INTEGER;if(i===Pn||i===Ln||i===Un||i===Dn)if(h===Ye)if(o=n.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Pn)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ln)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Un)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Dn)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=n.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Pn)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ln)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Un)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Dn)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===oi||i===si||i===ci||i===li)if(o=n.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===oi)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===si)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ci)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===li)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fi||i===di||i===ui)if(o=n.get("WEBGL_compressed_texture_etc"),o!==null){if(i===fi||i===di)return h===Ye?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===ui)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===pi||i===hi||i===mi||i===_i||i===vi||i===gi||i===Ei||i===Si||i===Mi||i===Ti||i===xi||i===Ai||i===Ri||i===Ci)if(o=n.get("WEBGL_compressed_texture_astc"),o!==null){if(i===pi)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hi)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mi)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_i)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vi)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gi)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ei)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Si)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Mi)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ti)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xi)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ai)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ri)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ci)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bi||i===Pi||i===Li)if(o=n.get("EXT_texture_compression_bptc"),o!==null){if(i===bi)return h===Ye?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pi)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Li)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ui||i===Di||i===wi||i===Ii)if(o=n.get("EXT_texture_compression_rgtc"),o!==null){if(i===Ui)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Di)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wi)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ii)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===en?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const $f=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zf=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Qf{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new gr(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new Ot({vertexShader:$f,fragmentShader:Zf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new Mn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jf extends Xr{constructor(n,t){super();const i=this;let s=null,o=1,h=null,f="local-floor",x=1,g=null,P=null,E=null,S=null,A=null,O=null;const D=typeof XRWebGLBinding<"u",l=new Qf,r={},U=t.getContextAttributes();let R=null,_=null;const y=[],b=[],N=new pt;let z=null;const p=new un;p.viewport=new dt;const d=new un;d.viewport=new dt;const C=[p,d],B=new Yr;let X=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let K=y[V];return K===void 0&&(K=new Cn,y[V]=K),K.getTargetRaySpace()},this.getControllerGrip=function(V){let K=y[V];return K===void 0&&(K=new Cn,y[V]=K),K.getGripSpace()},this.getHand=function(V){let K=y[V];return K===void 0&&(K=new Cn,y[V]=K),K.getHandSpace()};function $(V){const K=b.indexOf(V.inputSource);if(K===-1)return;const le=y[K];le!==void 0&&(le.update(V.inputSource,V.frame,g||h),le.dispatchEvent({type:V.type,data:V.inputSource}))}function W(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",ne);for(let V=0;V<y.length;V++){const K=b[V];K!==null&&(b[V]=null,y[V].disconnect(K))}X=null,Y=null,l.reset();for(const V in r)delete r[V];n.setRenderTarget(R),A=null,S=null,E=null,s=null,_=null,ke.stop(),i.isPresenting=!1,n.setPixelRatio(z),n.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){f=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||h},this.setReferenceSpace=function(V){g=V},this.getBaseLayer=function(){return S!==null?S:A},this.getBinding=function(){return E===null&&D&&(E=new XRWebGLBinding(s,t)),E},this.getFrame=function(){return O},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(R=n.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",W),s.addEventListener("inputsourceschange",ne),U.xrCompatible!==!0&&await t.makeXRCompatible(),z=n.getPixelRatio(),n.getSize(N),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,be=null,Ee=null;U.depth&&(Ee=U.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=U.stencil?_n:$n,be=U.stencil?en:tn);const ye={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:o};E=this.getBinding(),S=E.createProjectionLayer(ye),s.updateRenderState({layers:[S]}),n.setPixelRatio(1),n.setSize(S.textureWidth,S.textureHeight,!1),_=new zt(S.textureWidth,S.textureHeight,{format:Ct,type:Ft,depthTexture:new pr(S.textureWidth,S.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:U.stencil,colorSpace:n.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const le={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:o};A=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:A}),n.setPixelRatio(1),n.setSize(A.framebufferWidth,A.framebufferHeight,!1),_=new zt(A.framebufferWidth,A.framebufferHeight,{format:Ct,type:Ft,colorSpace:n.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:A.ignoreDepthValues===!1,resolveStencilBuffer:A.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(x),g=null,h=await s.requestReferenceSpace(f),ke.setContext(s),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return l.getDepthTexture()};function ne(V){for(let K=0;K<V.removed.length;K++){const le=V.removed[K],be=b.indexOf(le);be>=0&&(b[be]=null,y[be].disconnect(le))}for(let K=0;K<V.added.length;K++){const le=V.added[K];let be=b.indexOf(le);if(be===-1){for(let ye=0;ye<y.length;ye++)if(ye>=b.length){b.push(le),be=ye;break}else if(b[ye]===null){b[ye]=le,be=ye;break}if(be===-1)break}const Ee=y[be];Ee&&Ee.connect(le)}}const H=new He,ve=new He;function Te(V,K,le){H.setFromMatrixPosition(K.matrixWorld),ve.setFromMatrixPosition(le.matrixWorld);const be=H.distanceTo(ve),Ee=K.projectionMatrix.elements,ye=le.projectionMatrix.elements,ot=Ee[14]/(Ee[10]-1),m=Ee[14]/(Ee[10]+1),qe=(Ee[9]+1)/Ee[5],Le=(Ee[9]-1)/Ee[5],Re=(Ee[8]-1)/Ee[0],ue=(ye[8]+1)/ye[0],Ke=ot*Re,pe=ot*ue,we=be/(-Re+ue),at=we*-Re;if(K.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(at),V.translateZ(we),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Ee[10]===-1)V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const tt=ot+we,u=m+we,a=Ke-at,L=pe+(be-at),G=qe*m/u*tt,q=Le*m/u*tt;V.projectionMatrix.makePerspective(a,L,G,q,tt,u),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function De(V,K){K===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(K.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let K=V.near,le=V.far;l.texture!==null&&(l.depthNear>0&&(K=l.depthNear),l.depthFar>0&&(le=l.depthFar)),B.near=d.near=p.near=K,B.far=d.far=p.far=le,(X!==B.near||Y!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),X=B.near,Y=B.far),B.layers.mask=V.layers.mask|6,p.layers.mask=B.layers.mask&3,d.layers.mask=B.layers.mask&5;const be=V.parent,Ee=B.cameras;De(B,be);for(let ye=0;ye<Ee.length;ye++)De(Ee[ye],be);Ee.length===2?Te(B,p,d):B.projectionMatrix.copy(p.projectionMatrix),Be(V,B,be)};function Be(V,K,le){le===null?V.matrix.copy(K.matrixWorld):(V.matrix.copy(le.matrixWorld),V.matrix.invert(),V.matrix.multiply(K.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=qr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(S===null&&A===null))return x},this.setFoveation=function(V){x=V,S!==null&&(S.fixedFoveation=V),A!==null&&A.fixedFoveation!==void 0&&(A.fixedFoveation=V)},this.hasDepthSensing=function(){return l.texture!==null},this.getDepthSensingMesh=function(){return l.getMesh(B)},this.getCameraTexture=function(V){return r[V]};let et=null;function Je(V,K){if(P=K.getViewerPose(g||h),O=K,P!==null){const le=P.views;A!==null&&(n.setRenderTargetFramebuffer(_,A.framebuffer),n.setRenderTarget(_));let be=!1;le.length!==B.cameras.length&&(B.cameras.length=0,be=!0);for(let m=0;m<le.length;m++){const qe=le[m];let Le=null;if(A!==null)Le=A.getViewport(qe);else{const ue=E.getViewSubImage(S,qe);Le=ue.viewport,m===0&&(n.setRenderTargetTextures(_,ue.colorTexture,ue.depthStencilTexture),n.setRenderTarget(_))}let Re=C[m];Re===void 0&&(Re=new un,Re.layers.enable(m),Re.viewport=new dt,C[m]=Re),Re.matrix.fromArray(qe.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(qe.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Le.x,Le.y,Le.width,Le.height),m===0&&(B.matrix.copy(Re.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),be===!0&&B.cameras.push(Re)}const Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&D){E=i.getBinding();const m=E.getDepthInformation(le[0]);m&&m.isValid&&m.texture&&l.init(m,s.renderState)}if(Ee&&Ee.includes("camera-access")&&D){n.state.unbindTexture(),E=i.getBinding();for(let m=0;m<le.length;m++){const qe=le[m].camera;if(qe){let Le=r[qe];Le||(Le=new gr,r[qe]=Le);const Re=E.getCameraImage(qe);Le.sourceTexture=Re}}}}for(let le=0;le<y.length;le++){const be=b[le],Ee=y[le];be!==null&&Ee!==void 0&&Ee.update(be,K,g||h)}et&&et(V,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),O=null}const ke=new Ur;ke.setAnimationLoop(Je),this.setAnimationLoop=function(V){et=V},this.dispose=function(){}}}const Dt=new Rr,jf=new Jt;function ed(e,n){function t(l,r){l.matrixAutoUpdate===!0&&l.updateMatrix(),r.value.copy(l.matrix)}function i(l,r){r.color.getRGB(l.fogColor.value,Ar(e)),r.isFog?(l.fogNear.value=r.near,l.fogFar.value=r.far):r.isFogExp2&&(l.fogDensity.value=r.density)}function s(l,r,U,R,_){r.isMeshBasicMaterial||r.isMeshLambertMaterial?o(l,r):r.isMeshToonMaterial?(o(l,r),E(l,r)):r.isMeshPhongMaterial?(o(l,r),P(l,r)):r.isMeshStandardMaterial?(o(l,r),S(l,r),r.isMeshPhysicalMaterial&&A(l,r,_)):r.isMeshMatcapMaterial?(o(l,r),O(l,r)):r.isMeshDepthMaterial?o(l,r):r.isMeshDistanceMaterial?(o(l,r),D(l,r)):r.isMeshNormalMaterial?o(l,r):r.isLineBasicMaterial?(h(l,r),r.isLineDashedMaterial&&f(l,r)):r.isPointsMaterial?x(l,r,U,R):r.isSpriteMaterial?g(l,r):r.isShadowMaterial?(l.color.value.copy(r.color),l.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}function o(l,r){l.opacity.value=r.opacity,r.color&&l.diffuse.value.copy(r.color),r.emissive&&l.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(l.map.value=r.map,t(r.map,l.mapTransform)),r.alphaMap&&(l.alphaMap.value=r.alphaMap,t(r.alphaMap,l.alphaMapTransform)),r.bumpMap&&(l.bumpMap.value=r.bumpMap,t(r.bumpMap,l.bumpMapTransform),l.bumpScale.value=r.bumpScale,r.side===St&&(l.bumpScale.value*=-1)),r.normalMap&&(l.normalMap.value=r.normalMap,t(r.normalMap,l.normalMapTransform),l.normalScale.value.copy(r.normalScale),r.side===St&&l.normalScale.value.negate()),r.displacementMap&&(l.displacementMap.value=r.displacementMap,t(r.displacementMap,l.displacementMapTransform),l.displacementScale.value=r.displacementScale,l.displacementBias.value=r.displacementBias),r.emissiveMap&&(l.emissiveMap.value=r.emissiveMap,t(r.emissiveMap,l.emissiveMapTransform)),r.specularMap&&(l.specularMap.value=r.specularMap,t(r.specularMap,l.specularMapTransform)),r.alphaTest>0&&(l.alphaTest.value=r.alphaTest);const U=n.get(r),R=U.envMap,_=U.envMapRotation;R&&(l.envMap.value=R,Dt.copy(_),Dt.x*=-1,Dt.y*=-1,Dt.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Dt.y*=-1,Dt.z*=-1),l.envMapRotation.value.setFromMatrix4(jf.makeRotationFromEuler(Dt)),l.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,l.reflectivity.value=r.reflectivity,l.ior.value=r.ior,l.refractionRatio.value=r.refractionRatio),r.lightMap&&(l.lightMap.value=r.lightMap,l.lightMapIntensity.value=r.lightMapIntensity,t(r.lightMap,l.lightMapTransform)),r.aoMap&&(l.aoMap.value=r.aoMap,l.aoMapIntensity.value=r.aoMapIntensity,t(r.aoMap,l.aoMapTransform))}function h(l,r){l.diffuse.value.copy(r.color),l.opacity.value=r.opacity,r.map&&(l.map.value=r.map,t(r.map,l.mapTransform))}function f(l,r){l.dashSize.value=r.dashSize,l.totalSize.value=r.dashSize+r.gapSize,l.scale.value=r.scale}function x(l,r,U,R){l.diffuse.value.copy(r.color),l.opacity.value=r.opacity,l.size.value=r.size*U,l.scale.value=R*.5,r.map&&(l.map.value=r.map,t(r.map,l.uvTransform)),r.alphaMap&&(l.alphaMap.value=r.alphaMap,t(r.alphaMap,l.alphaMapTransform)),r.alphaTest>0&&(l.alphaTest.value=r.alphaTest)}function g(l,r){l.diffuse.value.copy(r.color),l.opacity.value=r.opacity,l.rotation.value=r.rotation,r.map&&(l.map.value=r.map,t(r.map,l.mapTransform)),r.alphaMap&&(l.alphaMap.value=r.alphaMap,t(r.alphaMap,l.alphaMapTransform)),r.alphaTest>0&&(l.alphaTest.value=r.alphaTest)}function P(l,r){l.specular.value.copy(r.specular),l.shininess.value=Math.max(r.shininess,1e-4)}function E(l,r){r.gradientMap&&(l.gradientMap.value=r.gradientMap)}function S(l,r){l.metalness.value=r.metalness,r.metalnessMap&&(l.metalnessMap.value=r.metalnessMap,t(r.metalnessMap,l.metalnessMapTransform)),l.roughness.value=r.roughness,r.roughnessMap&&(l.roughnessMap.value=r.roughnessMap,t(r.roughnessMap,l.roughnessMapTransform)),r.envMap&&(l.envMapIntensity.value=r.envMapIntensity)}function A(l,r,U){l.ior.value=r.ior,r.sheen>0&&(l.sheenColor.value.copy(r.sheenColor).multiplyScalar(r.sheen),l.sheenRoughness.value=r.sheenRoughness,r.sheenColorMap&&(l.sheenColorMap.value=r.sheenColorMap,t(r.sheenColorMap,l.sheenColorMapTransform)),r.sheenRoughnessMap&&(l.sheenRoughnessMap.value=r.sheenRoughnessMap,t(r.sheenRoughnessMap,l.sheenRoughnessMapTransform))),r.clearcoat>0&&(l.clearcoat.value=r.clearcoat,l.clearcoatRoughness.value=r.clearcoatRoughness,r.clearcoatMap&&(l.clearcoatMap.value=r.clearcoatMap,t(r.clearcoatMap,l.clearcoatMapTransform)),r.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=r.clearcoatRoughnessMap,t(r.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),r.clearcoatNormalMap&&(l.clearcoatNormalMap.value=r.clearcoatNormalMap,t(r.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(r.clearcoatNormalScale),r.side===St&&l.clearcoatNormalScale.value.negate())),r.dispersion>0&&(l.dispersion.value=r.dispersion),r.iridescence>0&&(l.iridescence.value=r.iridescence,l.iridescenceIOR.value=r.iridescenceIOR,l.iridescenceThicknessMinimum.value=r.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=r.iridescenceThicknessRange[1],r.iridescenceMap&&(l.iridescenceMap.value=r.iridescenceMap,t(r.iridescenceMap,l.iridescenceMapTransform)),r.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=r.iridescenceThicknessMap,t(r.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),r.transmission>0&&(l.transmission.value=r.transmission,l.transmissionSamplerMap.value=U.texture,l.transmissionSamplerSize.value.set(U.width,U.height),r.transmissionMap&&(l.transmissionMap.value=r.transmissionMap,t(r.transmissionMap,l.transmissionMapTransform)),l.thickness.value=r.thickness,r.thicknessMap&&(l.thicknessMap.value=r.thicknessMap,t(r.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=r.attenuationDistance,l.attenuationColor.value.copy(r.attenuationColor)),r.anisotropy>0&&(l.anisotropyVector.value.set(r.anisotropy*Math.cos(r.anisotropyRotation),r.anisotropy*Math.sin(r.anisotropyRotation)),r.anisotropyMap&&(l.anisotropyMap.value=r.anisotropyMap,t(r.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=r.specularIntensity,l.specularColor.value.copy(r.specularColor),r.specularColorMap&&(l.specularColorMap.value=r.specularColorMap,t(r.specularColorMap,l.specularColorMapTransform)),r.specularIntensityMap&&(l.specularIntensityMap.value=r.specularIntensityMap,t(r.specularIntensityMap,l.specularIntensityMapTransform))}function O(l,r){r.matcap&&(l.matcap.value=r.matcap)}function D(l,r){const U=n.get(r).light;l.referencePosition.value.setFromMatrixPosition(U.matrixWorld),l.nearDistance.value=U.shadow.camera.near,l.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function td(e,n,t,i){let s={},o={},h=[];const f=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function x(U,R){const _=R.program;i.uniformBlockBinding(U,_)}function g(U,R){let _=s[U.id];_===void 0&&(O(U),_=P(U),s[U.id]=_,U.addEventListener("dispose",l));const y=R.program;i.updateUBOMapping(U,y);const b=n.render.frame;o[U.id]!==b&&(S(U),o[U.id]=b)}function P(U){const R=E();U.__bindingPointIndex=R;const _=e.createBuffer(),y=U.__size,b=U.usage;return e.bindBuffer(e.UNIFORM_BUFFER,_),e.bufferData(e.UNIFORM_BUFFER,y,b),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,R,_),_}function E(){for(let U=0;U<f;U++)if(h.indexOf(U)===-1)return h.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(U){const R=s[U.id],_=U.uniforms,y=U.__cache;e.bindBuffer(e.UNIFORM_BUFFER,R);for(let b=0,N=_.length;b<N;b++){const z=Array.isArray(_[b])?_[b]:[_[b]];for(let p=0,d=z.length;p<d;p++){const C=z[p];if(A(C,b,p,y)===!0){const B=C.__offset,X=Array.isArray(C.value)?C.value:[C.value];let Y=0;for(let $=0;$<X.length;$++){const W=X[$],ne=D(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,e.bufferSubData(e.UNIFORM_BUFFER,B+Y,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,Y),Y+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,B,C.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function A(U,R,_,y){const b=U.value,N=R+"_"+_;if(y[N]===void 0)return typeof b=="number"||typeof b=="boolean"?y[N]=b:y[N]=b.clone(),!0;{const z=y[N];if(typeof b=="number"||typeof b=="boolean"){if(z!==b)return y[N]=b,!0}else if(z.equals(b)===!1)return z.copy(b),!0}return!1}function O(U){const R=U.uniforms;let _=0;const y=16;for(let N=0,z=R.length;N<z;N++){const p=Array.isArray(R[N])?R[N]:[R[N]];for(let d=0,C=p.length;d<C;d++){const B=p[d],X=Array.isArray(B.value)?B.value:[B.value];for(let Y=0,$=X.length;Y<$;Y++){const W=X[Y],ne=D(W),H=_%y,ve=H%ne.boundary,Te=H+ve;_+=ve,Te!==0&&y-Te<ne.storage&&(_+=y-Te),B.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=ne.storage}}}const b=_%y;return b>0&&(_+=y-b),U.__size=_,U.__cache={},this}function D(U){const R={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(R.boundary=4,R.storage=4):U.isVector2?(R.boundary=8,R.storage=8):U.isVector3||U.isColor?(R.boundary=16,R.storage=12):U.isVector4?(R.boundary=16,R.storage=16):U.isMatrix3?(R.boundary=48,R.storage=48):U.isMatrix4?(R.boundary=64,R.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),R}function l(U){const R=U.target;R.removeEventListener("dispose",l);const _=h.indexOf(R.__bindingPointIndex);h.splice(_,1),e.deleteBuffer(s[R.id]),delete s[R.id],delete o[R.id]}function r(){for(const U in s)e.deleteBuffer(s[U]);h=[],s={},o={}}return{bind:x,update:g,dispose:r}}class nd{constructor(n={}){const{canvas:t=Vr(),context:i=null,depth:s=!0,stencil:o=!1,alpha:h=!1,antialias:f=!1,premultipliedAlpha:x=!0,preserveDrawingBuffer:g=!1,powerPreference:P="default",failIfMajorPerformanceCaveat:E=!1,reversedDepthBuffer:S=!1}=n;this.isWebGLRenderer=!0;let A;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=i.getContextAttributes().alpha}else A=h;const O=new Uint32Array(4),D=new Int32Array(4);let l=null,r=null;const U=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let y=!1;this._outputColorSpace=kr;let b=0,N=0,z=null,p=-1,d=null;const C=new dt,B=new dt;let X=null;const Y=new $e(0);let $=0,W=t.width,ne=t.height,H=1,ve=null,Te=null;const De=new dt(0,0,W,ne),Be=new dt(0,0,W,ne);let et=!1;const Je=new ur;let ke=!1,V=!1;const K=new Jt,le=new He,be=new dt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function ot(){return z===null?H:1}let m=i;function qe(c,M){return t.getContext(c,M)}try{const c={alpha:!0,depth:s,stencil:o,antialias:f,premultipliedAlpha:x,preserveDrawingBuffer:g,powerPreference:P,failIfMajorPerformanceCaveat:E};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zr}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",Z,!1),m===null){const M="webgl2";if(m=qe(M,c),m===null)throw qe(M)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(c){throw console.error("THREE.WebGLRenderer: "+c.message),c}let Le,Re,ue,Ke,pe,we,at,tt,u,a,L,G,q,F,ge,ee,he,me,J,oe,Ae,_e,re,Ue;function v(){Le=new dl(m),Le.init(),_e=new Kf(m,Le),Re=new rl(m,Le,n,_e),ue=new Yf(m,Le),Re.reversedDepthBuffer&&S&&ue.buffers.depth.setReversed(!0),Ke=new hl(m),pe=new If,we=new qf(m,Le,ue,pe,Re,_e,Ke),at=new ol(_),tt=new fl(_),u=new So(m),re=new nl(m,u),a=new ul(m,u,Ke,re),L=new _l(m,a,u,Ke),J=new ml(m,Re,we),ee=new al(pe),G=new wf(_,at,tt,Le,Re,re,ee),q=new ed(_,pe),F=new yf,ge=new Vf(Le),me=new tl(_,at,tt,ue,L,A,x),he=new Wf(_,L,Re),Ue=new td(m,Ke,Re,ue),oe=new il(m,Le,Ke),Ae=new pl(m,Le,Ke),Ke.programs=G.programs,_.capabilities=Re,_.extensions=Le,_.properties=pe,_.renderLists=F,_.shadowMap=he,_.state=ue,_.info=Ke}v();const j=new Jf(_,m);this.xr=j,this.getContext=function(){return m},this.getContextAttributes=function(){return m.getContextAttributes()},this.forceContextLoss=function(){const c=Le.get("WEBGL_lose_context");c&&c.loseContext()},this.forceContextRestore=function(){const c=Le.get("WEBGL_lose_context");c&&c.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(c){c!==void 0&&(H=c,this.setSize(W,ne,!1))},this.getSize=function(c){return c.set(W,ne)},this.setSize=function(c,M,w=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=c,ne=M,t.width=Math.floor(c*H),t.height=Math.floor(M*H),w===!0&&(t.style.width=c+"px",t.style.height=M+"px"),this.setViewport(0,0,c,M)},this.getDrawingBufferSize=function(c){return c.set(W*H,ne*H).floor()},this.setDrawingBufferSize=function(c,M,w){W=c,ne=M,H=w,t.width=Math.floor(c*w),t.height=Math.floor(M*w),this.setViewport(0,0,c,M)},this.getCurrentViewport=function(c){return c.copy(C)},this.getViewport=function(c){return c.copy(De)},this.setViewport=function(c,M,w,I){c.isVector4?De.set(c.x,c.y,c.z,c.w):De.set(c,M,w,I),ue.viewport(C.copy(De).multiplyScalar(H).round())},this.getScissor=function(c){return c.copy(Be)},this.setScissor=function(c,M,w,I){c.isVector4?Be.set(c.x,c.y,c.z,c.w):Be.set(c,M,w,I),ue.scissor(B.copy(Be).multiplyScalar(H).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(c){ue.setScissorTest(et=c)},this.setOpaqueSort=function(c){ve=c},this.setTransparentSort=function(c){Te=c},this.getClearColor=function(c){return c.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(c=!0,M=!0,w=!0){let I=0;if(c){let T=!1;if(z!==null){const Q=z.texture.format;T=Q===Tr||Q===Mr||Q===Sr}if(T){const Q=z.texture.type,ae=Q===Ft||Q===tn||Q===gn||Q===en||Q===_r||Q===vr,fe=me.getClearColor(),se=me.getClearAlpha(),xe=fe.r,Ce=fe.g,Se=fe.b;ae?(O[0]=xe,O[1]=Ce,O[2]=Se,O[3]=se,m.clearBufferuiv(m.COLOR,0,O)):(D[0]=xe,D[1]=Ce,D[2]=Se,D[3]=se,m.clearBufferiv(m.COLOR,0,D))}else I|=m.COLOR_BUFFER_BIT}M&&(I|=m.DEPTH_BUFFER_BIT),w&&(I|=m.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),m.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),me.dispose(),F.dispose(),ge.dispose(),pe.dispose(),at.dispose(),tt.dispose(),L.dispose(),re.dispose(),Ue.dispose(),G.dispose(),j.dispose(),j.removeEventListener("sessionstart",Mt),j.removeEventListener("sessionend",jn),Pt.stop()};function te(c){c.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const c=Ke.autoReset,M=he.enabled,w=he.autoUpdate,I=he.needsUpdate,T=he.type;v(),Ke.autoReset=c,he.enabled=M,he.autoUpdate=w,he.needsUpdate=I,he.type=T}function Z(c){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",c.statusMessage)}function k(c){const M=c.target;M.removeEventListener("dispose",k),de(M)}function de(c){Pe(c),pe.remove(c)}function Pe(c){const M=pe.get(c).programs;M!==void 0&&(M.forEach(function(w){G.releaseProgram(w)}),c.isShaderMaterial&&G.releaseShaderCache(c))}this.renderBufferDirect=function(c,M,w,I,T,Q){M===null&&(M=Ee);const ae=T.isMesh&&T.matrixWorld.determinant()<0,fe=yr(c,M,w,I,T);ue.setMaterial(I,ae);let se=w.index,xe=1;if(I.wireframe===!0){if(se=a.getWireframeAttribute(w),se===void 0)return;xe=2}const Ce=w.drawRange,Se=w.attributes.position;let Ne=Ce.start*xe,Ve=(Ce.start+Ce.count)*xe;Q!==null&&(Ne=Math.max(Ne,Q.start*xe),Ve=Math.min(Ve,(Q.start+Q.count)*xe)),se!==null?(Ne=Math.max(Ne,0),Ve=Math.min(Ve,se.count)):Se!=null&&(Ne=Math.max(Ne,0),Ve=Math.min(Ve,Se.count));const je=Ve-Ne;if(je<0||je===1/0)return;re.setup(T,I,fe,w,se);let Xe,ze=oe;if(se!==null&&(Xe=u.get(se),ze=Ae,ze.setIndex(Xe)),T.isMesh)I.wireframe===!0?(ue.setLineWidth(I.wireframeLinewidth*ot()),ze.setMode(m.LINES)):ze.setMode(m.TRIANGLES);else if(T.isLine){let Me=I.linewidth;Me===void 0&&(Me=1),ue.setLineWidth(Me*ot()),T.isLineSegments?ze.setMode(m.LINES):T.isLineLoop?ze.setMode(m.LINE_LOOP):ze.setMode(m.LINE_STRIP)}else T.isPoints?ze.setMode(m.POINTS):T.isSprite&&ze.setMode(m.TRIANGLES);if(T.isBatchedMesh)if(T._multiDrawInstances!==null)Bn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ze.renderMultiDrawInstances(T._multiDrawStarts,T._multiDrawCounts,T._multiDrawCount,T._multiDrawInstances);else if(Le.get("WEBGL_multi_draw"))ze.renderMultiDraw(T._multiDrawStarts,T._multiDrawCounts,T._multiDrawCount);else{const Me=T._multiDrawStarts,Ze=T._multiDrawCounts,Fe=T._multiDrawCount,ht=se?u.get(se).bytesPerElement:1,Bt=pe.get(I).currentProgram.getUniforms();for(let mt=0;mt<Fe;mt++)Bt.setValue(m,"_gl_DrawID",mt),ze.render(Me[mt]/ht,Ze[mt])}else if(T.isInstancedMesh)ze.renderInstances(Ne,je,T.count);else if(w.isInstancedBufferGeometry){const Me=w._maxInstanceCount!==void 0?w._maxInstanceCount:1/0,Ze=Math.min(w.instanceCount,Me);ze.renderInstances(Ne,je,Ze)}else ze.render(Ne,je)};function We(c,M,w){c.transparent===!0&&c.side===xt&&c.forceSinglePass===!1?(c.side=St,c.needsUpdate=!0,an(c,M,w),c.side=jt,c.needsUpdate=!0,an(c,M,w),c.side=xt):an(c,M,w)}this.compile=function(c,M,w=null){w===null&&(w=c),r=ge.get(w),r.init(M),R.push(r),w.traverseVisible(function(T){T.isLight&&T.layers.test(M.layers)&&(r.pushLight(T),T.castShadow&&r.pushShadow(T))}),c!==w&&c.traverseVisible(function(T){T.isLight&&T.layers.test(M.layers)&&(r.pushLight(T),T.castShadow&&r.pushShadow(T))}),r.setupLights();const I=new Set;return c.traverse(function(T){if(!(T.isMesh||T.isPoints||T.isLine||T.isSprite))return;const Q=T.material;if(Q)if(Array.isArray(Q))for(let ae=0;ae<Q.length;ae++){const fe=Q[ae];We(fe,w,T),I.add(fe)}else We(Q,w,T),I.add(Q)}),r=R.pop(),I},this.compileAsync=function(c,M,w=null){const I=this.compile(c,M,w);return new Promise(T=>{function Q(){if(I.forEach(function(ae){pe.get(ae).currentProgram.isReady()&&I.delete(ae)}),I.size===0){T(c);return}setTimeout(Q,10)}Le.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Ge=null;function At(c){Ge&&Ge(c)}function Mt(){Pt.stop()}function jn(){Pt.start()}const Pt=new Ur;Pt.setAnimationLoop(At),typeof self<"u"&&Pt.setContext(self),this.setAnimationLoop=function(c){Ge=c,j.setAnimationLoop(c),c===null?Pt.stop():Pt.start()},j.addEventListener("sessionstart",Mt),j.addEventListener("sessionend",jn),this.render=function(c,M){if(M!==void 0&&M.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(c.matrixWorldAutoUpdate===!0&&c.updateMatrixWorld(),M.parent===null&&M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(M),M=j.getCamera()),c.isScene===!0&&c.onBeforeRender(_,c,M,z),r=ge.get(c,R.length),r.init(M),R.push(r),K.multiplyMatrices(M.projectionMatrix,M.matrixWorldInverse),Je.setFromProjectionMatrix(K,ai,M.reversedDepth),V=this.localClippingEnabled,ke=ee.init(this.clippingPlanes,V),l=F.get(c,U.length),l.init(),U.push(l),j.enabled===!0&&j.isPresenting===!0){const Q=_.xr.getDepthSensingMesh();Q!==null&&An(Q,M,-1/0,_.sortObjects)}An(c,M,0,_.sortObjects),l.finish(),_.sortObjects===!0&&l.sort(ve,Te),ye=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,ye&&me.addToRenderList(l,c),this.info.render.frame++,ke===!0&&ee.beginShadows();const w=r.state.shadowsArray;he.render(w,c,M),ke===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const I=l.opaque,T=l.transmissive;if(r.setupLights(),M.isArrayCamera){const Q=M.cameras;if(T.length>0)for(let ae=0,fe=Q.length;ae<fe;ae++){const se=Q[ae];ti(I,T,c,se)}ye&&me.render(c);for(let ae=0,fe=Q.length;ae<fe;ae++){const se=Q[ae];ei(l,c,se,se.viewport)}}else T.length>0&&ti(I,T,c,M),ye&&me.render(c),ei(l,c,M);z!==null&&N===0&&(we.updateMultisampleRenderTarget(z),we.updateRenderTargetMipmap(z)),c.isScene===!0&&c.onAfterRender(_,c,M),re.resetDefaultState(),p=-1,d=null,R.pop(),R.length>0?(r=R[R.length-1],ke===!0&&ee.setGlobalState(_.clippingPlanes,r.state.camera)):r=null,U.pop(),U.length>0?l=U[U.length-1]:l=null};function An(c,M,w,I){if(c.visible===!1)return;if(c.layers.test(M.layers)){if(c.isGroup)w=c.renderOrder;else if(c.isLOD)c.autoUpdate===!0&&c.update(M);else if(c.isLight)r.pushLight(c),c.castShadow&&r.pushShadow(c);else if(c.isSprite){if(!c.frustumCulled||Je.intersectsSprite(c)){I&&be.setFromMatrixPosition(c.matrixWorld).applyMatrix4(K);const ae=L.update(c),fe=c.material;fe.visible&&l.push(c,ae,fe,w,be.z,null)}}else if((c.isMesh||c.isLine||c.isPoints)&&(!c.frustumCulled||Je.intersectsObject(c))){const ae=L.update(c),fe=c.material;if(I&&(c.boundingSphere!==void 0?(c.boundingSphere===null&&c.computeBoundingSphere(),be.copy(c.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),be.copy(ae.boundingSphere.center)),be.applyMatrix4(c.matrixWorld).applyMatrix4(K)),Array.isArray(fe)){const se=ae.groups;for(let xe=0,Ce=se.length;xe<Ce;xe++){const Se=se[xe],Ne=fe[Se.materialIndex];Ne&&Ne.visible&&l.push(c,ae,Ne,w,be.z,Se)}}else fe.visible&&l.push(c,ae,fe,w,be.z,null)}}const Q=c.children;for(let ae=0,fe=Q.length;ae<fe;ae++)An(Q[ae],M,w,I)}function ei(c,M,w,I){const T=c.opaque,Q=c.transmissive,ae=c.transparent;r.setupLightsView(w),ke===!0&&ee.setGlobalState(_.clippingPlanes,w),I&&ue.viewport(C.copy(I)),T.length>0&&rn(T,M,w),Q.length>0&&rn(Q,M,w),ae.length>0&&rn(ae,M,w),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function ti(c,M,w,I){if((w.isScene===!0?w.overrideMaterial:null)!==null)return;r.state.transmissionRenderTarget[I.id]===void 0&&(r.state.transmissionRenderTarget[I.id]=new zt(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float")?En:Ft,minFilter:Kt,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const Q=r.state.transmissionRenderTarget[I.id],ae=I.viewport||C;Q.setSize(ae.z*_.transmissionResolutionScale,ae.w*_.transmissionResolutionScale);const fe=_.getRenderTarget(),se=_.getActiveCubeFace(),xe=_.getActiveMipmapLevel();_.setRenderTarget(Q),_.getClearColor(Y),$=_.getClearAlpha(),$<1&&_.setClearColor(16777215,.5),_.clear(),ye&&me.render(w);const Ce=_.toneMapping;_.toneMapping=bt;const Se=I.viewport;if(I.viewport!==void 0&&(I.viewport=void 0),r.setupLightsView(I),ke===!0&&ee.setGlobalState(_.clippingPlanes,I),rn(c,w,I),we.updateMultisampleRenderTarget(Q),we.updateRenderTargetMipmap(Q),Le.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Ve=0,je=M.length;Ve<je;Ve++){const Xe=M[Ve],ze=Xe.object,Me=Xe.geometry,Ze=Xe.material,Fe=Xe.group;if(Ze.side===xt&&ze.layers.test(I.layers)){const ht=Ze.side;Ze.side=St,Ze.needsUpdate=!0,ni(ze,w,I,Me,Ze,Fe),Ze.side=ht,Ze.needsUpdate=!0,Ne=!0}}Ne===!0&&(we.updateMultisampleRenderTarget(Q),we.updateRenderTargetMipmap(Q))}_.setRenderTarget(fe,se,xe),_.setClearColor(Y,$),Se!==void 0&&(I.viewport=Se),_.toneMapping=Ce}function rn(c,M,w){const I=M.isScene===!0?M.overrideMaterial:null;for(let T=0,Q=c.length;T<Q;T++){const ae=c[T],fe=ae.object,se=ae.geometry,xe=ae.group;let Ce=ae.material;Ce.allowOverride===!0&&I!==null&&(Ce=I),fe.layers.test(w.layers)&&ni(fe,M,w,se,Ce,xe)}}function ni(c,M,w,I,T,Q){c.onBeforeRender(_,M,w,I,T,Q),c.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,c.matrixWorld),c.normalMatrix.getNormalMatrix(c.modelViewMatrix),T.onBeforeRender(_,M,w,I,c,Q),T.transparent===!0&&T.side===xt&&T.forceSinglePass===!1?(T.side=St,T.needsUpdate=!0,_.renderBufferDirect(w,M,I,T,c,Q),T.side=jt,T.needsUpdate=!0,_.renderBufferDirect(w,M,I,T,c,Q),T.side=xt):_.renderBufferDirect(w,M,I,T,c,Q),c.onAfterRender(_,M,w,I,T,Q)}function an(c,M,w){M.isScene!==!0&&(M=Ee);const I=pe.get(c),T=r.state.lights,Q=r.state.shadowsArray,ae=T.state.version,fe=G.getParameters(c,T.state,Q,M,w),se=G.getProgramCacheKey(fe);let xe=I.programs;I.environment=c.isMeshStandardMaterial?M.environment:null,I.fog=M.fog,I.envMap=(c.isMeshStandardMaterial?tt:at).get(c.envMap||I.environment),I.envMapRotation=I.environment!==null&&c.envMap===null?M.environmentRotation:c.envMapRotation,xe===void 0&&(c.addEventListener("dispose",k),xe=new Map,I.programs=xe);let Ce=xe.get(se);if(Ce!==void 0){if(I.currentProgram===Ce&&I.lightsStateVersion===ae)return ri(c,fe),Ce}else fe.uniforms=G.getUniforms(c),c.onBeforeCompile(fe,_),Ce=G.acquireProgram(fe,se),xe.set(se,Ce),I.uniforms=fe.uniforms;const Se=I.uniforms;return(!c.isShaderMaterial&&!c.isRawShaderMaterial||c.clipping===!0)&&(Se.clippingPlanes=ee.uniform),ri(c,fe),I.needsLights=Or(c),I.lightsStateVersion=ae,I.needsLights&&(Se.ambientLightColor.value=T.state.ambient,Se.lightProbe.value=T.state.probe,Se.directionalLights.value=T.state.directional,Se.directionalLightShadows.value=T.state.directionalShadow,Se.spotLights.value=T.state.spot,Se.spotLightShadows.value=T.state.spotShadow,Se.rectAreaLights.value=T.state.rectArea,Se.ltc_1.value=T.state.rectAreaLTC1,Se.ltc_2.value=T.state.rectAreaLTC2,Se.pointLights.value=T.state.point,Se.pointLightShadows.value=T.state.pointShadow,Se.hemisphereLights.value=T.state.hemi,Se.directionalShadowMap.value=T.state.directionalShadowMap,Se.directionalShadowMatrix.value=T.state.directionalShadowMatrix,Se.spotShadowMap.value=T.state.spotShadowMap,Se.spotLightMatrix.value=T.state.spotLightMatrix,Se.spotLightMap.value=T.state.spotLightMap,Se.pointShadowMap.value=T.state.pointShadowMap,Se.pointShadowMatrix.value=T.state.pointShadowMatrix),I.currentProgram=Ce,I.uniformsList=null,Ce}function ii(c){if(c.uniformsList===null){const M=c.currentProgram.getUniforms();c.uniformsList=mn.seqWithValue(M.seq,c.uniforms)}return c.uniformsList}function ri(c,M){const w=pe.get(c);w.outputColorSpace=M.outputColorSpace,w.batching=M.batching,w.batchingColor=M.batchingColor,w.instancing=M.instancing,w.instancingColor=M.instancingColor,w.instancingMorph=M.instancingMorph,w.skinning=M.skinning,w.morphTargets=M.morphTargets,w.morphNormals=M.morphNormals,w.morphColors=M.morphColors,w.morphTargetsCount=M.morphTargetsCount,w.numClippingPlanes=M.numClippingPlanes,w.numIntersection=M.numClipIntersection,w.vertexAlphas=M.vertexAlphas,w.vertexTangents=M.vertexTangents,w.toneMapping=M.toneMapping}function yr(c,M,w,I,T){M.isScene!==!0&&(M=Ee),we.resetTextureUnits();const Q=M.fog,ae=I.isMeshStandardMaterial?M.environment:null,fe=z===null?_.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Sn,se=(I.isMeshStandardMaterial?tt:at).get(I.envMap||ae),xe=I.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,Ce=!!w.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),Se=!!w.morphAttributes.position,Ne=!!w.morphAttributes.normal,Ve=!!w.morphAttributes.color;let je=bt;I.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(je=_.toneMapping);const Xe=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,ze=Xe!==void 0?Xe.length:0,Me=pe.get(I),Ze=r.state.lights;if(ke===!0&&(V===!0||c!==d)){const st=c===d&&I.id===p;ee.setState(I,c,st)}let Fe=!1;I.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Ze.state.version||Me.outputColorSpace!==fe||T.isBatchedMesh&&Me.batching===!1||!T.isBatchedMesh&&Me.batching===!0||T.isBatchedMesh&&Me.batchingColor===!0&&T.colorTexture===null||T.isBatchedMesh&&Me.batchingColor===!1&&T.colorTexture!==null||T.isInstancedMesh&&Me.instancing===!1||!T.isInstancedMesh&&Me.instancing===!0||T.isSkinnedMesh&&Me.skinning===!1||!T.isSkinnedMesh&&Me.skinning===!0||T.isInstancedMesh&&Me.instancingColor===!0&&T.instanceColor===null||T.isInstancedMesh&&Me.instancingColor===!1&&T.instanceColor!==null||T.isInstancedMesh&&Me.instancingMorph===!0&&T.morphTexture===null||T.isInstancedMesh&&Me.instancingMorph===!1&&T.morphTexture!==null||Me.envMap!==se||I.fog===!0&&Me.fog!==Q||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ee.numPlanes||Me.numIntersection!==ee.numIntersection)||Me.vertexAlphas!==xe||Me.vertexTangents!==Ce||Me.morphTargets!==Se||Me.morphNormals!==Ne||Me.morphColors!==Ve||Me.toneMapping!==je||Me.morphTargetsCount!==ze)&&(Fe=!0):(Fe=!0,Me.__version=I.version);let ht=Me.currentProgram;Fe===!0&&(ht=an(I,M,T));let Bt=!1,mt=!1,Yt=!1;const Qe=ht.getUniforms(),gt=Me.uniforms;if(ue.useProgram(ht.program)&&(Bt=!0,mt=!0,Yt=!0),I.id!==p&&(p=I.id,mt=!0),Bt||d!==c){ue.buffers.depth.getReversed()&&c.reversedDepth!==!0&&(c._reversedDepth=!0,c.updateProjectionMatrix()),Qe.setValue(m,"projectionMatrix",c.projectionMatrix),Qe.setValue(m,"viewMatrix",c.matrixWorldInverse);const lt=Qe.map.cameraPosition;lt!==void 0&&lt.setValue(m,le.setFromMatrixPosition(c.matrixWorld)),Re.logarithmicDepthBuffer&&Qe.setValue(m,"logDepthBufFC",2/(Math.log(c.far+1)/Math.LN2)),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Qe.setValue(m,"isOrthographic",c.isOrthographicCamera===!0),d!==c&&(d=c,mt=!0,Yt=!0)}if(T.isSkinnedMesh){Qe.setOptional(m,T,"bindMatrix"),Qe.setOptional(m,T,"bindMatrixInverse");const st=T.skeleton;st&&(st.boneTexture===null&&st.computeBoneTexture(),Qe.setValue(m,"boneTexture",st.boneTexture,we))}T.isBatchedMesh&&(Qe.setOptional(m,T,"batchingTexture"),Qe.setValue(m,"batchingTexture",T._matricesTexture,we),Qe.setOptional(m,T,"batchingIdTexture"),Qe.setValue(m,"batchingIdTexture",T._indirectTexture,we),Qe.setOptional(m,T,"batchingColorTexture"),T._colorsTexture!==null&&Qe.setValue(m,"batchingColorTexture",T._colorsTexture,we));const Et=w.morphAttributes;if((Et.position!==void 0||Et.normal!==void 0||Et.color!==void 0)&&J.update(T,w,ht),(mt||Me.receiveShadow!==T.receiveShadow)&&(Me.receiveShadow=T.receiveShadow,Qe.setValue(m,"receiveShadow",T.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(gt.envMap.value=se,gt.flipEnvMap.value=se.isCubeTexture&&se.isRenderTargetTexture===!1?-1:1),I.isMeshStandardMaterial&&I.envMap===null&&M.environment!==null&&(gt.envMapIntensity.value=M.environmentIntensity),mt&&(Qe.setValue(m,"toneMappingExposure",_.toneMappingExposure),Me.needsLights&&Fr(gt,Yt),Q&&I.fog===!0&&q.refreshFogUniforms(gt,Q),q.refreshMaterialUniforms(gt,I,H,ne,r.state.transmissionRenderTarget[c.id]),mn.upload(m,ii(Me),gt,we)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(mn.upload(m,ii(Me),gt,we),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Qe.setValue(m,"center",T.center),Qe.setValue(m,"modelViewMatrix",T.modelViewMatrix),Qe.setValue(m,"normalMatrix",T.normalMatrix),Qe.setValue(m,"modelMatrix",T.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const st=I.uniformsGroups;for(let lt=0,Rn=st.length;lt<Rn;lt++){const Lt=st[lt];Ue.update(Lt,ht),Ue.bind(Lt,ht)}}return ht}function Fr(c,M){c.ambientLightColor.needsUpdate=M,c.lightProbe.needsUpdate=M,c.directionalLights.needsUpdate=M,c.directionalLightShadows.needsUpdate=M,c.pointLights.needsUpdate=M,c.pointLightShadows.needsUpdate=M,c.spotLights.needsUpdate=M,c.spotLightShadows.needsUpdate=M,c.rectAreaLights.needsUpdate=M,c.hemisphereLights.needsUpdate=M}function Or(c){return c.isMeshLambertMaterial||c.isMeshToonMaterial||c.isMeshPhongMaterial||c.isMeshStandardMaterial||c.isShadowMaterial||c.isShaderMaterial&&c.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(c,M,w){const I=pe.get(c);I.__autoAllocateDepthBuffer=c.resolveDepthBuffer===!1,I.__autoAllocateDepthBuffer===!1&&(I.__useRenderToTexture=!1),pe.get(c.texture).__webglTexture=M,pe.get(c.depthTexture).__webglTexture=I.__autoAllocateDepthBuffer?void 0:w,I.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(c,M){const w=pe.get(c);w.__webglFramebuffer=M,w.__useDefaultFramebuffer=M===void 0};const Br=m.createFramebuffer();this.setRenderTarget=function(c,M=0,w=0){z=c,b=M,N=w;let I=!0,T=null,Q=!1,ae=!1;if(c){const se=pe.get(c);if(se.__useDefaultFramebuffer!==void 0)ue.bindFramebuffer(m.FRAMEBUFFER,null),I=!1;else if(se.__webglFramebuffer===void 0)we.setupRenderTarget(c);else if(se.__hasExternalTextures)we.rebindTextures(c,pe.get(c.texture).__webglTexture,pe.get(c.depthTexture).__webglTexture);else if(c.depthBuffer){const Se=c.depthTexture;if(se.__boundDepthTexture!==Se){if(Se!==null&&pe.has(Se)&&(c.width!==Se.image.width||c.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");we.setupDepthRenderbuffer(c)}}const xe=c.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(ae=!0);const Ce=pe.get(c).__webglFramebuffer;c.isWebGLCubeRenderTarget?(Array.isArray(Ce[M])?T=Ce[M][w]:T=Ce[M],Q=!0):c.samples>0&&we.useMultisampledRTT(c)===!1?T=pe.get(c).__webglMultisampledFramebuffer:Array.isArray(Ce)?T=Ce[w]:T=Ce,C.copy(c.viewport),B.copy(c.scissor),X=c.scissorTest}else C.copy(De).multiplyScalar(H).floor(),B.copy(Be).multiplyScalar(H).floor(),X=et;if(w!==0&&(T=Br),ue.bindFramebuffer(m.FRAMEBUFFER,T)&&I&&ue.drawBuffers(c,T),ue.viewport(C),ue.scissor(B),ue.setScissorTest(X),Q){const se=pe.get(c.texture);m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_CUBE_MAP_POSITIVE_X+M,se.__webglTexture,w)}else if(ae){const se=M;for(let xe=0;xe<c.textures.length;xe++){const Ce=pe.get(c.textures[xe]);m.framebufferTextureLayer(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0+xe,Ce.__webglTexture,w,se)}}else if(c!==null&&w!==0){const se=pe.get(c.texture);m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,se.__webglTexture,w)}p=-1},this.readRenderTargetPixels=function(c,M,w,I,T,Q,ae,fe=0){if(!(c&&c.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let se=pe.get(c).__webglFramebuffer;if(c.isWebGLCubeRenderTarget&&ae!==void 0&&(se=se[ae]),se){ue.bindFramebuffer(m.FRAMEBUFFER,se);try{const xe=c.textures[fe],Ce=xe.format,Se=xe.type;if(!Re.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(Se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}M>=0&&M<=c.width-I&&w>=0&&w<=c.height-T&&(c.textures.length>1&&m.readBuffer(m.COLOR_ATTACHMENT0+fe),m.readPixels(M,w,I,T,_e.convert(Ce),_e.convert(Se),Q))}finally{const xe=z!==null?pe.get(z).__webglFramebuffer:null;ue.bindFramebuffer(m.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(c,M,w,I,T,Q,ae,fe=0){if(!(c&&c.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let se=pe.get(c).__webglFramebuffer;if(c.isWebGLCubeRenderTarget&&ae!==void 0&&(se=se[ae]),se)if(M>=0&&M<=c.width-I&&w>=0&&w<=c.height-T){ue.bindFramebuffer(m.FRAMEBUFFER,se);const xe=c.textures[fe],Ce=xe.format,Se=xe.type;if(!Re.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ne=m.createBuffer();m.bindBuffer(m.PIXEL_PACK_BUFFER,Ne),m.bufferData(m.PIXEL_PACK_BUFFER,Q.byteLength,m.STREAM_READ),c.textures.length>1&&m.readBuffer(m.COLOR_ATTACHMENT0+fe),m.readPixels(M,w,I,T,_e.convert(Ce),_e.convert(Se),0);const Ve=z!==null?pe.get(z).__webglFramebuffer:null;ue.bindFramebuffer(m.FRAMEBUFFER,Ve);const je=m.fenceSync(m.SYNC_GPU_COMMANDS_COMPLETE,0);return m.flush(),await Wr(m,je,4),m.bindBuffer(m.PIXEL_PACK_BUFFER,Ne),m.getBufferSubData(m.PIXEL_PACK_BUFFER,0,Q),m.deleteBuffer(Ne),m.deleteSync(je),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(c,M=null,w=0){const I=Math.pow(2,-w),T=Math.floor(c.image.width*I),Q=Math.floor(c.image.height*I),ae=M!==null?M.x:0,fe=M!==null?M.y:0;we.setTexture2D(c,0),m.copyTexSubImage2D(m.TEXTURE_2D,w,0,0,ae,fe,T,Q),ue.unbindTexture()};const Gr=m.createFramebuffer(),Hr=m.createFramebuffer();this.copyTextureToTexture=function(c,M,w=null,I=null,T=0,Q=null){Q===null&&(T!==0?(Bn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=T,T=0):Q=0);let ae,fe,se,xe,Ce,Se,Ne,Ve,je;const Xe=c.isCompressedTexture?c.mipmaps[Q]:c.image;if(w!==null)ae=w.max.x-w.min.x,fe=w.max.y-w.min.y,se=w.isBox3?w.max.z-w.min.z:1,xe=w.min.x,Ce=w.min.y,Se=w.isBox3?w.min.z:0;else{const Et=Math.pow(2,-T);ae=Math.floor(Xe.width*Et),fe=Math.floor(Xe.height*Et),c.isDataArrayTexture?se=Xe.depth:c.isData3DTexture?se=Math.floor(Xe.depth*Et):se=1,xe=0,Ce=0,Se=0}I!==null?(Ne=I.x,Ve=I.y,je=I.z):(Ne=0,Ve=0,je=0);const ze=_e.convert(M.format),Me=_e.convert(M.type);let Ze;M.isData3DTexture?(we.setTexture3D(M,0),Ze=m.TEXTURE_3D):M.isDataArrayTexture||M.isCompressedArrayTexture?(we.setTexture2DArray(M,0),Ze=m.TEXTURE_2D_ARRAY):(we.setTexture2D(M,0),Ze=m.TEXTURE_2D),m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,M.flipY),m.pixelStorei(m.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),m.pixelStorei(m.UNPACK_ALIGNMENT,M.unpackAlignment);const Fe=m.getParameter(m.UNPACK_ROW_LENGTH),ht=m.getParameter(m.UNPACK_IMAGE_HEIGHT),Bt=m.getParameter(m.UNPACK_SKIP_PIXELS),mt=m.getParameter(m.UNPACK_SKIP_ROWS),Yt=m.getParameter(m.UNPACK_SKIP_IMAGES);m.pixelStorei(m.UNPACK_ROW_LENGTH,Xe.width),m.pixelStorei(m.UNPACK_IMAGE_HEIGHT,Xe.height),m.pixelStorei(m.UNPACK_SKIP_PIXELS,xe),m.pixelStorei(m.UNPACK_SKIP_ROWS,Ce),m.pixelStorei(m.UNPACK_SKIP_IMAGES,Se);const Qe=c.isDataArrayTexture||c.isData3DTexture,gt=M.isDataArrayTexture||M.isData3DTexture;if(c.isDepthTexture){const Et=pe.get(c),st=pe.get(M),lt=pe.get(Et.__renderTarget),Rn=pe.get(st.__renderTarget);ue.bindFramebuffer(m.READ_FRAMEBUFFER,lt.__webglFramebuffer),ue.bindFramebuffer(m.DRAW_FRAMEBUFFER,Rn.__webglFramebuffer);for(let Lt=0;Lt<se;Lt++)Qe&&(m.framebufferTextureLayer(m.READ_FRAMEBUFFER,m.COLOR_ATTACHMENT0,pe.get(c).__webglTexture,T,Se+Lt),m.framebufferTextureLayer(m.DRAW_FRAMEBUFFER,m.COLOR_ATTACHMENT0,pe.get(M).__webglTexture,Q,je+Lt)),m.blitFramebuffer(xe,Ce,ae,fe,Ne,Ve,ae,fe,m.DEPTH_BUFFER_BIT,m.NEAREST);ue.bindFramebuffer(m.READ_FRAMEBUFFER,null),ue.bindFramebuffer(m.DRAW_FRAMEBUFFER,null)}else if(T!==0||c.isRenderTargetTexture||pe.has(c)){const Et=pe.get(c),st=pe.get(M);ue.bindFramebuffer(m.READ_FRAMEBUFFER,Gr),ue.bindFramebuffer(m.DRAW_FRAMEBUFFER,Hr);for(let lt=0;lt<se;lt++)Qe?m.framebufferTextureLayer(m.READ_FRAMEBUFFER,m.COLOR_ATTACHMENT0,Et.__webglTexture,T,Se+lt):m.framebufferTexture2D(m.READ_FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,Et.__webglTexture,T),gt?m.framebufferTextureLayer(m.DRAW_FRAMEBUFFER,m.COLOR_ATTACHMENT0,st.__webglTexture,Q,je+lt):m.framebufferTexture2D(m.DRAW_FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,st.__webglTexture,Q),T!==0?m.blitFramebuffer(xe,Ce,ae,fe,Ne,Ve,ae,fe,m.COLOR_BUFFER_BIT,m.NEAREST):gt?m.copyTexSubImage3D(Ze,Q,Ne,Ve,je+lt,xe,Ce,ae,fe):m.copyTexSubImage2D(Ze,Q,Ne,Ve,xe,Ce,ae,fe);ue.bindFramebuffer(m.READ_FRAMEBUFFER,null),ue.bindFramebuffer(m.DRAW_FRAMEBUFFER,null)}else gt?c.isDataTexture||c.isData3DTexture?m.texSubImage3D(Ze,Q,Ne,Ve,je,ae,fe,se,ze,Me,Xe.data):M.isCompressedArrayTexture?m.compressedTexSubImage3D(Ze,Q,Ne,Ve,je,ae,fe,se,ze,Xe.data):m.texSubImage3D(Ze,Q,Ne,Ve,je,ae,fe,se,ze,Me,Xe):c.isDataTexture?m.texSubImage2D(m.TEXTURE_2D,Q,Ne,Ve,ae,fe,ze,Me,Xe.data):c.isCompressedTexture?m.compressedTexSubImage2D(m.TEXTURE_2D,Q,Ne,Ve,Xe.width,Xe.height,ze,Xe.data):m.texSubImage2D(m.TEXTURE_2D,Q,Ne,Ve,ae,fe,ze,Me,Xe);m.pixelStorei(m.UNPACK_ROW_LENGTH,Fe),m.pixelStorei(m.UNPACK_IMAGE_HEIGHT,ht),m.pixelStorei(m.UNPACK_SKIP_PIXELS,Bt),m.pixelStorei(m.UNPACK_SKIP_ROWS,mt),m.pixelStorei(m.UNPACK_SKIP_IMAGES,Yt),Q===0&&M.generateMipmaps&&m.generateMipmap(Ze),ue.unbindTexture()},this.initRenderTarget=function(c){pe.get(c).__webglFramebuffer===void 0&&we.setupRenderTarget(c)},this.initTexture=function(c){c.isCubeTexture?we.setTextureCube(c,0):c.isData3DTexture?we.setTexture3D(c,0):c.isDataArrayTexture||c.isCompressedArrayTexture?we.setTexture2DArray(c,0):we.setTexture2D(c,0),ue.unbindTexture()},this.resetState=function(){b=0,N=0,z=null,ue.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(n),t.unpackColorSpace=nt._getUnpackColorSpace()}}const vt=e=>new so({color:e}),_t={turquoise:vt(4835274),rail:vt(8885928),dark:vt(4412780),silver:vt(12174286),copper:vt(15825701),copperDark:vt(13195287),red:vt(16738644),blue:vt(1145833),skin:vt(16767144),hair:vt(5649711),shirt:vt(2344399),pants:vt(2637669)};function ct(e,n,t,i,s,o=0,h=0,f=0){const x=new ut(new Qn(n,t,i),s);return x.position.set(o,h,f),x.castShadow=!0,x.receiveShadow=!0,e.add(x),x}function id(e,n,t,i=.025){const s=new vo(n.map(o=>new He(o[0],o[1],o[2])));e.add(new ut(new go(s,32,i,6,!1),vt(t)))}function dr(e,n,t,i,s){const o=document.createElement("canvas");o.width=128,o.height=128;const h=o.getContext("2d");h.fillStyle="white",h.font="bold 88px Arial",h.textAlign="center",h.textBaseline="middle",h.fillText(n,64,70);const f=new ut(new Mn(.52,.52),new Qt({map:new Lr(o),transparent:!0,depthWrite:!1}));f.position.set(t,i,s),e.add(f)}class od{constructor(n){this.mount=n,this.renderer=new nd({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Pr,n.prepend(this.renderer.domElement),this.scene.add(new co(16777215,2.2));const t=new lo(16777215,2.4);t.position.set(-3,9,7),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),t.shadow.camera.left=-7,t.shadow.camera.right=7,t.shadow.camera.top=6,t.shadow.camera.bottom=-6,this.scene.add(t),this.camera.position.set(3.2,3.3,9),this.camera.lookAt(-.5,.85,0),this.build(),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(n),this.resize(),this.characterFrame=requestAnimationFrame(this.animateCharacter)}mount;renderer;scene=new fo;camera=new br(-5.1,5.1,2.9,-2.9,.1,100);magnet=new sn;student=uo();person=this.student.root;hairSpikes=this.student.hairTufts;sparks=new sn;flashOutline=new sn;surpriseMouth=this.student.surpriseMouth;reactionLevel=1;reactionFrame=0;silhouetteTimer=0;characterFrame=0;characterLast=0;characterClock=0;characterPaused=!1;originalMaterials=new Map;observer;disposed=!1;animateCharacter=n=>{if(this.disposed)return;const t=this.characterLast?Math.min(50,n-this.characterLast):0;if(this.characterLast=n,!this.characterPaused&&!document.hidden){if(this.characterClock+=t/1e3,this.reactionLevel===1){const i=Math.sin(this.characterClock*2.1);this.student.head.position.y=1.26+i*.012,this.student.head.rotation.z=Math.sin(this.characterClock*.9)*.012,this.student.arms[0].rotation.z=Math.sin(this.characterClock*1.4)*.025,this.student.arms[1].rotation.z=-Math.sin(this.characterClock*1.4)*.025}this.render()}this.characterFrame=requestAnimationFrame(this.animateCharacter)};setCharacterPaused(n){this.characterPaused=n,this.characterLast=0}setCharacterOutcome(n){this.resetReaction(),this.reactionLevel=n?5:6,this.student.head.rotation.z=n?-.08:.12,this.student.arms[0].rotation.z=n?-2.5:.18,this.student.arms[1].rotation.z=n?2.5:-.18,this.student.sadMouth.visible=!n,this.student.smileMouth.visible=n,this.student.surpriseMouth.visible=!1,this.render()}build(){ct(this.scene,8.8,.32,3.2,_t.turquoise,-.42,-.16,0);for(const g of[-.66,.66])ct(this.scene,6.5,.14,.15,_t.rail,-.6,.18,g);for(const g of[-3.2,-1.65,-.1,1.45,2.6])for(const P of[-.66,.66])ct(this.scene,.26,.2,.28,_t.dark,g,.1,P);ct(this.scene,1.18,1.08,1.2,_t.silver,-3.62,.74,0),ct(this.scene,.2,.18,.18,_t.dark,-2.95,.74,0),id(this.scene,[[-2.88,.74,0],[-2.46,.74,0]],6583435,.075);const n=document.createElement("canvas");n.width=256,n.height=128;const t=n.getContext("2d");t.fillStyle="#203758",t.font="bold 54px sans-serif",t.textAlign="center",t.fillText("电机",128,83);const i=new ut(new Mn(.88,.44),new Qt({map:new Lr(n),transparent:!0}));i.position.set(-3.62,.8,.61),this.scene.add(i);const s=new sn;this.scene.add(s);for(let g=0;g<5;g++){const P=-.45+g*.17,E=g%2?_t.copperDark:_t.copper;ct(s,.1,1.75,.11,E,P,1.13,-.62),ct(s,.1,1.75,.11,E,P,1.13,.62),ct(s,.1,.11,1.32,E,P,1.97,0),ct(s,.1,.11,1.32,E,P,.28,0)}for(const g of[-.62,.42])ct(this.scene,.16,2.02,.16,_t.rail,g,1.08,-.86),ct(this.scene,.16,2.02,.16,_t.rail,g,1.08,.86);ct(this.scene,.16,.16,.16,_t.red,-.62,1.84,.67),ct(this.scene,.16,.16,.16,_t.blue,.42,.42,.67),ct(this.magnet,.72,.58,.74,_t.red,-.36,.93,0),ct(this.magnet,.72,.58,.74,_t.blue,.36,.93,0),dr(this.magnet,"N",-.36,.94,.39),dr(this.magnet,"S",.36,.94,.39),this.scene.add(this.magnet);const o=this.person;o.position.set(-4.47,0,1.1),this.scene.add(o);const h=new Qt({color:16766264,side:xt});for(const g of[-.48,.48]){const P=new ut(new po(new ho().moveTo(0,0).lineTo(.09,.13).lineTo(.025,.13).lineTo(.12,.31).lineTo(-.055,.11).lineTo(.015,.11).lineTo(0,0)),h);P.position.set(g,1.6,.26),P.scale.x=g<0?-1:1,this.sparks.add(P)}this.sparks.visible=!1,o.add(this.sparks);const f=new mo({color:7728383}),x=[[[-.39,.42],[-.48,.59],[-.39,.79],[-.49,.98]],[[.39,.42],[.5,.61],[.39,.81],[.5,1.01]],[[-.33,1.25],[-.38,1.52],[-.3,1.91],[-.13,2.26]],[[.33,1.25],[.4,1.54],[.28,1.94],[.12,2.26]]];for(const g of x)this.flashOutline.add(new _o(new Zn().setFromPoints(g.map(([P,E])=>new He(P,E,.35))),f));this.flashOutline.visible=!1,o.add(this.flashOutline)}reactToCombo(n){if(n<=this.reactionLevel)return;if(this.reactionLevel=n,cancelAnimationFrame(this.reactionFrame),clearTimeout(this.silhouetteTimer),this.originalMaterials.size&&(this.restoreMaterials(),this.flashOutline.visible=!1),this.surpriseMouth.visible=!0,this.student.smileMouth.visible=!1,this.student.head.rotation.z=n>=3?-.055:.06,this.student.arms[0].rotation.z=n>=3?-.85:-.35,this.student.arms[1].rotation.z=n>=3?.85:.35,n>=3&&(this.hairSpikes.visible=!0,this.sparks.visible=!0),n===4&&this.originalMaterials.size===0){const f=new Qt({color:1517638});this.person.traverse(x=>{x instanceof ut&&(this.originalMaterials.set(x,x.material),x.material=f)}),this.flashOutline.visible=!0,this.silhouetteTimer=window.setTimeout(()=>{this.restoreMaterials(),this.flashOutline.visible=!1,this.render()},145)}let t=0,i=performance.now();const s=n>=4?.23:n>=3?.2:.13,o=n>=4?.23:n>=3?.18:.12,h=f=>{!this.characterPaused&&!document.hidden&&(t+=Math.max(0,f-i)),i=f;const x=Math.min(1,t/420),g=Math.sin(Math.PI*x);this.person.scale.setScalar(1+s*g),this.person.position.y=o*g,this.render(),x<1&&(this.reactionFrame=requestAnimationFrame(h))};this.reactionFrame=requestAnimationFrame(h)}restoreMaterials(){for(const[n,t]of this.originalMaterials)n.material=t;this.originalMaterials.clear(),this.render()}resetReaction(){cancelAnimationFrame(this.reactionFrame),clearTimeout(this.silhouetteTimer),this.restoreMaterials(),this.reactionLevel=1,this.person.position.y=0,this.person.scale.setScalar(1),this.surpriseMouth.visible=!1,this.student.sadMouth.visible=!1,this.student.smileMouth.visible=!0,this.student.head.rotation.z=0,this.student.head.position.y=1.26,this.student.arms[0].rotation.z=0,this.student.arms[1].rotation.z=0,this.student.legs[0].rotation.x=0,this.student.legs[1].rotation.x=0,this.hairSpikes.visible=!1,this.sparks.visible=!1,this.flashOutline.visible=!1,this.render()}setMagnet(n){this.magnet.position.x=n,this.render()}projectPoint(n,t,i){const s=new He(n,t,i).project(this.camera);return{x:(s.x+1)*this.mount.clientWidth/2,y:(1-s.y)*this.mount.clientHeight/2}}resize(){const n=this.mount.clientWidth,t=this.mount.clientHeight;if(!n||!t)return;this.renderer.setSize(n,t,!1);const i=n/t,s=Math.max(2.85,5.25/i);this.camera.left=-s*i,this.camera.right=s*i,this.camera.top=s,this.camera.bottom=-s,this.camera.updateProjectionMatrix(),this.render()}render(){this.disposed||this.renderer.render(this.scene,this.camera)}dispose(){this.disposed=!0,cancelAnimationFrame(this.characterFrame),cancelAnimationFrame(this.reactionFrame),clearTimeout(this.silhouetteTimer),this.observer.disconnect(),this.renderer.dispose(),this.renderer.domElement.remove()}}class sd{waiting=0;active=!1;get pending(){return this.waiting}get running(){return this.active}get outstanding(){return this.waiting+Number(this.active)}enqueue(){return this.waiting++,this.startNext()}finish(){return this.active?(this.active=!1,this.startNext()):!1}clear(){this.waiting=0,this.active=!1}startNext(){return this.active||this.waiting===0?!1:(this.waiting--,this.active=!0,!0)}}export{sd as D,od as E,cn as a,ad as s};
