
const searchBox = document.querySelector("#search-box");
const regionDropDown = document.querySelector("#region-drop-down");
const countriesContainer = document.querySelector("#country-cards");
fetch('https://restcountries.com/v2/all')
   .then(res => res.json())
   .then(data => countriesData = data)
   .then(countriesData => loadCountryCards(countriesData));

let regionWithDupValues = [], regionUniquValues = [];


function loadCountryCards(countriesData)
{
 
  for(var i=0;i<countriesData.length;i++)
  {
    let reg = countriesData[i].region;
    regionWithDupValues.push(reg);
  }
  regionWithDupValues.forEach((item)=>
  {
    if(!regionUniquValues.includes(item))
    {
      regionUniquValues.push(item);
    }
  })
  for(let i=0;i<regionUniquValues.length;i++)
  {
   var option = document.createElement('option');
   option.value = regionUniquValues[i];
   option.innerHTML=regionUniquValues[i];
   regionDropDown.append(option);
  }
  for(var i=0;i<countriesData.length;i++)
  {
   let countryDiv=document.createElement('div');
   countryDiv.className='country-container';
   let imageDiv = document.createElement('div');
   imageDiv.className='country-image-container';
   let image = document.createElement('img');
   image.className='country-image'
   image.src= countriesData[i].flag;
   let countryNameCon = document.createElement('div');
   countryNameCon.className = 'country-name-con'
   let countryName = document.createElement('span');
   countryName.className = 'country-name';
   countryName.innerHTML=countriesData[i].name;
   let populationSpan = document.createElement('span');
   populationSpan.className='country-population';
   populationSpan.innerHTML=`Population: ${countriesData[i].population}`;
   let regionSpan = document.createElement('div');
   regionSpan.className = 'country-region';
   regionSpan.innerHTML = `Region: ${countriesData[i].region}`;
   let capitalSpan = document.createElement('div');
   capitalSpan.className = 'country-capital';
   capitalSpan.innerHTML = `Capital City: ${countriesData[i].capital}`; 

   imageDiv.appendChild(image);
   countryDiv.appendChild(imageDiv);
   countryNameCon.appendChild(countryName);
   countryDiv.appendChild(countryNameCon);
   countryDiv.appendChild(populationSpan);
   countryDiv.appendChild(regionSpan);
   countryDiv.appendChild(capitalSpan);
   countriesContainer.appendChild(countryDiv);

  }


}  


 

