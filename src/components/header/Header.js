import React from 'react';
import './Header.scss';
export default class Header extends React.Component {
  render() {
    return <header className="header-container">
            <svg  width="32" height="32" version="1.1" id="Capa_1"  x="0px" y="0px"
	 viewBox="0 0 512 512">
<g>
	<g>
		<path d="M489.197,115.643c-4.973-5.498-12.077-8.652-19.489-8.652H153.239l-27.287-69.367c2.897-0.613,5.835-1.106,8.812-1.454
			c25.156-2.936,49.952,4.099,69.818,19.812c2.108,1.667,4.142,3.436,6.104,5.274L187.561,90.5
			c-2.604,3.294-2.047,8.076,1.247,10.681c3.294,2.605,8.075,2.047,10.681-1.247l29.264-37.005
			c8.568-10.834,6.724-26.618-4.11-35.187C197.701,6.434,164.03-3.103,129.818,0.889C95.613,4.883,65.04,21.92,43.733,48.864
			C-0.318,104.565,9.161,185.725,64.865,229.783c4.468,3.533,9.895,4.979,15.49,5.406c7.095,0.541,15.545-4.266,19.696-9.514
			l28.655-36.234l30.09,298.913C160.153,501.835,171.392,512,184.942,512H434.23c13.549,0,24.789-10.166,26.146-23.647
			l35.48-352.453C496.596,128.526,494.171,121.143,489.197,115.643z M81.544,219.912c-2.609,0.302-5.184-0.426-7.245-2.056
			C25.172,179,16.811,107.422,55.661,58.296c18.787-23.757,45.75-38.78,75.92-42.302c30.175-3.522,59.872,4.887,83.628,23.676
			c2.673,2.115,3.952,5.348,3.7,8.515c-1.596-1.419-3.22-2.807-4.892-4.129c-23.052-18.234-51.825-26.398-81.016-22.99
			c-29.192,3.408-55.308,17.98-73.539,41.033c-14.219,17.98-21.906,39.066-23.404,60.373c-0.013,0.08-0.032,0.157-0.044,0.237
			c-0.057,0.431-0.067,0.856-0.052,1.276c-1.957,34.595,12.37,69.595,41.551,92.675c1.399,1.107,2.837,2.169,4.29,3.208
			C81.716,219.881,81.632,219.901,81.544,219.912z M126.225,168.06l-32.738,41.398c-2.241-1.484-4.429-3.057-6.537-4.724
			c-23.046-18.229-35.345-45.084-35.943-72.39l72.913,9.553l2.6,25.828C126.421,167.835,126.318,167.942,126.225,168.06z
			 M129.971,115.644c-2.844,3.146-4.851,6.908-5.913,10.933l-72.161-9.455c2.248-16.142,8.674-31.909,19.493-45.59
			c10.628-13.439,24.371-23.518,39.934-29.552l26.624,67.681C134.962,111.118,132.243,113.133,129.971,115.644z M480.723,134.378
			l-35.48,352.453c-0.571,5.679-5.306,9.962-11.014,9.962H184.941c-5.708,0-10.442-4.282-11.014-9.962l-35.479-352.454
			c-0.313-3.106,0.709-6.217,2.803-8.532c2.096-2.317,5.088-3.646,8.211-3.646H469.71c3.123,0,6.115,1.329,8.21,3.644
			C480.013,128.161,481.036,131.272,480.723,134.378z"/>
	</g>
</g>
<g>
	<g>
		<path d="M404.081,372.14c-4.184-0.413-7.906,2.626-8.327,6.804l-0.483,4.792c-0.421,4.178,2.64,7.781,6.804,8.327
			c6.195,0.811,7.933-2.884,8.327-6.804l0.483-4.792C411.305,376.288,408.259,372.56,404.081,372.14z"/>
	</g>
</g>
<g>
	<g>
		<path d="M401.428,398.489c-4.18-0.418-7.906,2.626-8.327,6.804l-3.635,36.107c-0.421,4.178,2.625,7.906,6.804,8.327
			c0.26,0.025,0.516,0.039,0.771,0.039c3.857,0,7.162-2.923,7.556-6.842l3.635-36.107
			C408.653,402.638,405.607,398.91,401.428,398.489z"/>
	</g>
</g>
<g>
	<g>
		<path d="M438.824,288.134c-0.515-6.101-3.096-12.06-7.755-16.718l-52.879-52.879c-5.06-5.06-11.807-7.846-18.998-7.846
			s-13.938,2.786-18.997,7.846l-10.631,10.631l-10.631-10.631c-5.06-5.06-11.807-7.846-18.998-7.846s-13.938,2.786-18.997,7.846
			l-3.905,3.905l-49.475-55.917c-3.844-4.345-9.152-6.934-14.943-7.287c-5.78-0.347-11.372,1.569-15.718,5.415
			c-18.715,16.562-30.977,39.321-34.527,64.087c-3.278,22.871,1.01,46.196,12.08,66.219c-1.774,3.614-2.539,7.688-2.128,11.761
			l15.492,153.9c1.122,11.15,10.419,19.559,21.626,19.559h200.293c11.206,0,20.504-8.408,21.626-19.559l15.492-153.899
			C447.464,300.621,445.753,291.828,438.824,288.134z M226.519,188.3l35.204,39.788l-61.683,13.613
			c0.208-17.669,7.258-35.199,20.915-48.215C220.955,193.486,223.499,191.046,226.519,188.3z M254.141,245.334l-26.082,26.082
			c-3.287,3.287-5.541,7.219-6.765,11.393h-7.948c-5.874-7.898-9.78-16.741-11.766-25.9
			C201.724,256.887,254.141,245.334,254.141,245.334z M206.974,176.041c5.049-4.435,9.678,1.108,9.678,1.108
			c-1.324,1.036-2.632,2.106-3.908,3.235c-29.717,26.297-36.054,69.147-17.465,102.426c0,0-5.433-0.697-9.259,1.505
			C167.726,247.93,175.85,203.382,206.974,176.041z M416.225,459.099c-0.338,3.349-3.129,5.873-6.495,5.873H209.438
			c-3.365,0-6.157-2.525-6.495-5.873l-15.492-153.901c-0.185-1.832,0.418-3.665,1.653-5.031c1.236-1.366,3-2.149,4.841-2.149h27.348
			c1.225,4.174,3.478,8.108,6.765,11.393l10.205,10.205c1.484,1.484,6.075,4.317,10.753,0c3.086-2.848,2.97-7.784,0-10.753
			l-10.205-10.205c-4.546-4.546-4.546-11.943,0-16.489l52.88-52.879c2.187-2.187,5.115-3.391,8.243-3.391s6.058,1.204,8.244,3.391
			l10.631,10.631l-4.81,4.81c-2.969,2.969-2.969,7.784,0,10.753c2.969,2.97,7.784,2.97,10.753,0l26.194-26.194
			c2.187-2.187,5.115-3.391,8.243-3.391s6.058,1.204,8.244,3.391l52.879,52.879c2.187,2.187,3.391,5.115,3.391,8.244
			s-1.204,6.058-3.391,8.244l-52.88,52.879c-2.187,2.187-5.115,3.391-8.243,3.391s-6.058-1.204-8.244-3.391l-52.879-52.879
			c-2.187-2.187-3.391-5.115-3.391-8.243s1.204-6.058,3.391-8.244l11.646-11.646c2.969-2.969,2.969-7.784,0-10.753
			c-2.969-2.969-7.784-2.969-10.753,0l-11.646,11.646c-5.06,5.06-7.846,11.807-7.846,18.998c0,7.191,2.786,13.938,7.846,18.997
			l31.495,31.495l-10.632,10.631c-2.187,2.187-5.115,3.392-8.243,3.392s-6.058-1.204-8.244-3.392l-27.466-27.466
			c-2.971-2.969-7.783-2.969-10.754,0c-2.969,2.969-2.969,7.784,0,10.753l27.466,27.466c5.06,5.06,11.807,7.846,18.998,7.846
			c7.191,0,13.938-2.787,18.997-7.846l10.631-10.631l10.631,10.631c5.06,5.06,11.807,7.846,18.998,7.846s13.938-2.786,18.997-7.846
			l52.879-52.879c0.086-0.086,0.166-0.176,0.251-0.264L416.225,459.099z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
            <p>Cocktails</p>
          </header>;
  }
}
