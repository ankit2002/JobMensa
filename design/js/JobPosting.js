// JavaScript Document
/*----------------------------------------
ADD SKILL ITEM IN THE SELECTED SKILL LIST:
-----------------------------------------*/
function Add_BusinessAreas()
{	
	var Flag = 0;
	var strHtml = "";
	var lstBusinessList  = document.getElementById("lstBusinessList");
	var lstSelectedBusinessList = document.getElementById("lstSelectedBusinessList");

	/*
	ADD THE FIRST BUSINESS AREA IN AN EMPTY LIST:
	*/
	if (lstSelectedBusinessList.length == 0)
	{		
		if (lstBusinessList.selectedIndex != -1)
		{			
			strHtml = "<SELECT name='lstSelectedBusinessList' id='lstSelectedBusinessList' size='5' class='azjtextarea' style='width:180px;'>";
			strHtml = strHtml + "<option value='" + lstBusinessList.options[lstBusinessList.selectedIndex].value + "'>" + lstBusinessList.options[lstBusinessList.selectedIndex].text  + "</option>";
			strHtml = strHtml + "</SELECT>";
						
			document.getElementById("tdSelectedBusinessList").innerHTML = "";
			document.getElementById("tdSelectedBusinessList").innerHTML = strHtml;
		}
	}
	/*
	ADD THE SELECTED BUSINESS IN A NON EMPTY LIST:
	*/	
	if (lstSelectedBusinessList.length > 0)
	{
		if (lstSelectedBusinessList.length >= 10)
		{
			Flag = 0;
			alert("You cannot select more then 10 items.");
		}
		else
		{
			/*
			VERIFY THE SELECTED BUSINESS AREA IS DUPLICATE OR NOT:
			*/
			for(i = 0; i <= lstSelectedBusinessList.length-1; i++)
			{
				if (lstSelectedBusinessList.options[i].value == lstBusinessList.options[lstBusinessList.selectedIndex].value)
				{
					alert("This business area already selected!");
					Flag = 0;
					break;
				}
				else
				{	
					Flag = 1;
				} 			
			}
		}
		/*
		ADD THE SELECTED BUSINESS AREA IN A NON EMPTY LIST
		AFTER IT HAS PASSED FROM DUPLICATION CHECKING:
		*/
		if (Flag == 1)
		{
			for(i = 0; i <= lstSelectedBusinessList.length-1; i++)
			{
				strHtml = "<SELECT name='lstSelectedBusinessList' id='lstSelectedBusinessList' size='5' class='azjtextarea' style='width:180px;'>";				
				for (i = 0; i <= lstSelectedBusinessList.length-1; i++)
				{
					strHtml = strHtml + "<option value='" + lstSelectedBusinessList.options[i].value + "'>" + lstSelectedBusinessList.options[i].text  + "</option>";					
				}
				strHtml = strHtml + "<option value='" + lstBusinessList.options[lstBusinessList.selectedIndex].value + "'>" + lstBusinessList.options[lstBusinessList.selectedIndex].text  + "</option>";
				strHtml = strHtml + "</SELECT>";
				
				document.getElementById("tdSelectedBusinessList").innerHTML = "";
				document.getElementById("tdSelectedBusinessList").innerHTML = strHtml;
			}			
		}
	}
}

/*---------------------------------------------------
REMOVE BUSINESS AREA FROM THE SELECTED BUSINESS LIST:
-----------------------------------------------------*/
function Remove_BusinessAreas()
{
	var strHtml = "";
	var lstSelectedBusinessList = document.getElementById("lstSelectedBusinessList");

	/*
	CHECK THE SELECTED BUSINESS LIST IS EMPTY OR NOT:
	*/
	if(lstSelectedBusinessList.length > 0)
	{
		/*
		CHECK THE BUSINESS IS SELECTED IN THE LIST OR NOT:
		*/		
		if(lstSelectedBusinessList.selectedIndex != -1)
		{
			strHtml = "<SELECT name='lstSelectedBusinessList' id='lstSelectedBusinessList' size='5' class='azjtextarea' style='width:180px;'>";
			for(i = 0; i <= lstSelectedBusinessList.length-1; i++)			
			{
				/*
				LOAD ALL THE PREVIOUSLY SELECTED BUSINESS IN THE LIST EXCEPT THE SELECTED ONE:
				*/
				if (lstSelectedBusinessList.options[lstSelectedBusinessList.selectedIndex].value != lstSelectedBusinessList.options[i].value)
				{
					strHtml = strHtml + "<option value='" + lstSelectedBusinessList.options[i].value + "'>" + lstSelectedBusinessList.options[i].text  + "</option>";					
				}
			}
			strHtml = strHtml + "</SELECT>";
			document.getElementById("tdSelectedBusinessList").innerHTML = "";
			document.getElementById("tdSelectedBusinessList").innerHTML = strHtml;			
		}
	}
}

/*---------------------------------------------------
UPDATE THE HIDDEN CONTROL WITH THE SELECTED SKILL ID:
----------------------------------------------------*/
function UpdateBusinessIDList()
{
	var strSelectedBusinessID = "";
	var lstSelectedBusinessList = document.getElementById("lstSelectedBusinessList");
	
	document.getElementById("txtSelectedBusinessList").value = "";
	if(lstSelectedBusinessList.length > 0)
	{
		for(i = 0; i<= lstSelectedBusinessList.length-1; i++)
		{
			if (strSelectedBusinessID ==  "")
			{
				strSelectedBusinessID = lstSelectedBusinessList.options[i].value;
			}
			else
			{
				strSelectedBusinessID = strSelectedBusinessID + "," + lstSelectedBusinessList.options[i].value;
			}			
		}		
	}
	document.getElementById("txtSelectedBusinessList").value = strSelectedBusinessID;	
}

/*--------------------------------------------------
ADD EXPERIENCE ITEM IN THE SELECTED EXPERIENCE LIST:
----------------------------------------------------*/
function Add_Experience()
{
	var Flag = 0;
	var strHtml = "";
	var lstExperienceList  = document.getElementById("lstExperienceList");
	var lstSelectedExperienceList = document.getElementById("lstSelectedExperienceList");

	/*
	ADD THE FIRST EXPERIENCE IN AN EMPTY LIST:
	*/
	if (lstSelectedExperienceList.length == 0)
	{
		if (lstExperienceList.selectedIndex != -1)
		{
			strHtml = "<SELECT name='lstSelectedExperienceList' id='lstSelectedExperienceList' size='5' class='azjtextarea' style='width:180px;'>";
			strHtml = strHtml + "<option value='" + lstExperienceList.options[lstExperienceList.selectedIndex].value + "'>" + lstExperienceList.options[lstExperienceList.selectedIndex].text  + "</option>";
			strHtml = strHtml + "</SELECT>";
						
			document.getElementById("tdSelectedExperienceList").innerHTML = "";
			document.getElementById("tdSelectedExperienceList").innerHTML = strHtml;
		}
	}
	/*
	ADD THE SELECTED EXPERIENCE IN A NON EMPTY LIST:
	*/	
	if (lstSelectedExperienceList.length > 0)
	{
		if (lstSelectedExperienceList.length >= 10)
		{
			Flag = 0;
			alert("You cannot select more then 10 items.");			
		}
		else
		{
			/*
			VERIFY THE SELECTED EXPERIENCE ITEM IS DUPLICATE OR NOT:
			*/
			for(i = 0; i <= lstSelectedExperienceList.length-1; i++)
			{
				if (lstSelectedExperienceList.options[i].value == lstExperienceList.options[lstExperienceList.selectedIndex].value)
				{
					alert("This experience item already selected!");
					Flag = 0;
					break;
				}
				else
				{	
					Flag = 1;
				} 			
			}
		}
		/*
		ADD THE SELECTED EXPERIENCE ITEM IN A NON EMPTY LIST
		AFTER IT HAS PASSED FROM DUPLICATION CHECKING:
		*/
		if (Flag == 1)
		{
			for(i = 0; i <= lstSelectedExperienceList.length-1; i++)
			{
				strHtml = "<SELECT name='lstSelectedExperienceList' id='lstSelectedExperienceList' size='5' class='azjtextarea' style='width:180px;'>";				
				for (i = 0; i <= lstSelectedExperienceList.length-1; i++)
				{
					strHtml = strHtml + "<option value='" + lstSelectedExperienceList.options[i].value + "'>" + lstSelectedExperienceList.options[i].text  + "</option>";
				}
				strHtml = strHtml + "<option value='" + lstExperienceList.options[lstExperienceList.selectedIndex].value + "'>" + lstExperienceList.options[lstExperienceList.selectedIndex].text  + "</option>";
				strHtml = strHtml + "</SELECT>";
				
				document.getElementById("tdSelectedExperienceList").innerHTML = "";
				document.getElementById("tdSelectedExperienceList").innerHTML = strHtml;
			}			
		}
	}
}

/*---------------------------------------------
REMOVE EXPERIENCE ITEM FROM THE SELECTED SKILL LIST:
-----------------------------------------------*/
function Remove_Experience()
{
	var strHtml = "";
	var lstSelectedExperienceList = document.getElementById("lstSelectedExperienceList");

	/*
	CHECK THE SELECTED EXPERIENCE LIST IS EMPTY OR NOT:
	*/
	if(lstSelectedExperienceList.length > 0)
	{
		/*
		CHECK THE EXPERIENCE IS SELECTED IN THE LIST:
		*/		
		if(lstSelectedExperienceList.selectedIndex != -1)
		{
			strHtml = "<SELECT name='lstSelectedExperienceList' id='lstSelectedExperienceList' size='5' class='azjtextarea' style='width:180px;'>";
			for(i = 0; i <= lstSelectedExperienceList.length-1; i++)			
			{
				/*
				LOAD ALL THE PREVIOUSLY SELECTED EXPERIENCE IN THE LIST EXCEPT THE SELECTED ONE:
				*/
				if (lstSelectedExperienceList.options[lstSelectedExperienceList.selectedIndex].value != lstSelectedExperienceList.options[i].value)
				{
					strHtml = strHtml + "<option value='" + lstSelectedExperienceList.options[i].value + "'>" + lstSelectedExperienceList.options[i].text  + "</option>";					
				}
			}
			strHtml = strHtml + "</SELECT>";
			document.getElementById("tdSelectedExperienceList").innerHTML = "";
			document.getElementById("tdSelectedExperienceList").innerHTML = strHtml;			
		}
	}
}
/*-------------------------------------------------------
UPDATE THE HIDDEN CONTROL WITH THE SELECTED EXPERIENCE ID:
---------------------------------------------------------*/
function UpdateExperienceIDList()
{
	var strSelectedExperienceID = "";
	var lstSelectedExperienceList = document.getElementById("lstSelectedExperienceList");
	
	document.getElementById("txtSelectedExperienceList").value = "";
	if(lstSelectedExperienceList.length > 0)
	{
		for(i = 0; i<= lstSelectedExperienceList.length-1; i++)
		{
			if (strSelectedExperienceID ==  "")
			{
				strSelectedExperienceID = lstSelectedExperienceList.options[i].value;
			}
			else
			{
				strSelectedExperienceID = strSelectedExperienceID + "," + lstSelectedExperienceList.options[i].value;
			}			
		}		
	}
	document.getElementById("txtSelectedExperienceList").value = strSelectedExperienceID;	
}
/*---------------------------------------------------------------
LOADING DISTRICT NAMES OF SELECTED DIVISION IN THE LOCATION LIST:
----------------------------------------------------------------*/
/*
function LoadDistrict()
{
	//document.getElementById("tdLocation").innerHTML = "";
	var strHtml = "";
	var i=0;
	//strHtml = "<SELECT name='lstLocation' id='lstLocation' size='5' class='azjtextarea' style='width:180px;'>";
	for(i = 0; i < arrDistrict[0].length; i++)
	{
		//document.write(arrDistrict[0][i] + "---" + arrDistrict[1][i] + "---" + arrDistrict[2][i] + "<br>");
		/*
		arrDistrict[0][i] ---> Location ID
		arrDistrict[1][i] ---> District Name
		arrDistrict[2][i] ---> Division Name
		*/
		
		
			//document.print( "<option value='" + arrDistrict[0][i] + "'>" + arrDistrict[1][i] + "</option>");
		
	//}
	//strHtml = strHtml + "</SELECT>";
	
	
	//document.getElementById("1stLocation").innerHTML = strHtml;	
//}*/

/*-----------------------------------
LOADING COUNTRY IN THE LOCATION LIST:
-------------------------------------*/
function LoadCountry()
{
	var strHtml = "";
	
	strHtml = "<SELECT name='lstLocation' id='lstLocation' size='5' class='azjtextarea' style='width:180px;' scroling='no'>";
	for(i = 0; i < arrCountry[1].length; i++)
	{
		//document.write(arrDistrict[0][i] + "---" + arrDistrict[1][i] + "---" + arrDistrict[2][i] + "<br>");
		/*
		arrCountry[0][i] ---> Location ID
		arrCountry[1][i] ---> Country Name
		arrCountry[2][i] ---> Location Type
		*/
		strHtml = strHtml + "<option value='" + arrCountry[0][i] + "'>" + arrCountry[1][i] + "</option>";
	}
	strHtml = strHtml + "<SELECT>";
	
	document.getElementById("tdLocation").innerHTML = "";
	document.getElementById("tdLocation").innerHTML = strHtml;
}

function SetJobLocation(strLocationType)
{
	/*ANYWHERE IN BANGLADESH*/
	if (parseInt(strLocationType) == 1)
	{
		document.getElementById("txtSelectedLocationList").value = "1";	
		
		//document.getElementById("spnDivision").style.color = "#999999";
		//document.getElementById("cboDivision").disabled = true;
		
		document.getElementById("spnLocation").style.color = "#999999";
		document.getElementById("tdLocation").innerHTML = "<SELECT name='lstLocation' id='lstLocation' size='5' class='azjtextarea' style='width:180px;'></SELECT>";
		
		document.getElementById("spnSelectedLocation").style.color = "#999999";
		document.getElementById("tdSelectedLocation").innerHTML = "<SELECT name='lstSelectedLocation' id='lstSelectedLocation' size='5' class='azjtextarea' style='width:180px;'></SELECT>";
		
		//document.getElementById("1stLocation").disabled = false;
		document.getElementById("cmdAddLocation").disabled = true;
		document.getElementById("cmdRemoveLocation").disabled = true;
	}	
	/*
	WITHIN BANGLADESH: 
	*/	
	if (parseInt(strLocationType) == 0)
	{
		document.getElementById("txtSelectedLocationList").value = "";	
		
		//document.getElementById("spnDivision").style.color = "#535a62";
		//document.getElementById("cboDivision").disabled = false;
		

		document.getElementById("spnLocation").style.color = "#535a62";
		document.getElementById("spnLocation").innerHTML = "";
		document.getElementById("spnLocation").innerHTML = "District"
		document.getElementById("tdLocation").innerHTML = "";
		var SelectHtml="";
		
		SelectHtml= SelectHtml + "<SELECT name='lstLocation' id='lstLocation' size='5' class='azjtextarea' style='width:180px;'>";
		for( i=0; i<arrDistrict[0].length; i++)
		{
			SelectHtml=SelectHtml + "<option value='" + arrDistrict[0][i] + "'>" + arrDistrict[1][i] + "</option>";
			
		}
               SelectHtml= SelectHtml + "</SELECT>";
		document.getElementById("tdLocation").innerHTML = SelectHtml;
		
		document.getElementById("spnSelectedLocation").style.color = "#535a62";
		document.getElementById("spnSelectedLocation").innerHTML = "";
		document.getElementById("spnSelectedLocation").innerHTML = "Selected District"
		document.getElementById("tdSelectedLocation").innerHTML = "";
		document.getElementById("tdSelectedLocation").innerHTML = "<SELECT name='lstSelectedLocation' id='lstSelectedLocation' size='5' class='azjtextarea' style='width:180px;'></SELECT>";

		document.getElementById("cmdAddLocation").disabled = false;
		document.getElementById("cmdRemoveLocation").disabled = false;		
	}
	/*
	OUTSIDE BANGLADESH: 
	*/		
	if (parseInt(strLocationType) == 1)
	{
		document.getElementById("txtSelectedLocationList").value = "";		
		
		document.getElementById("spnDivision").style.color = "#999999";
		document.getElementById("cboDivision").disabled = true;

		document.getElementById("spnLocation").style.color = "#535a62";	
		document.getElementById("spnLocation").innerHTML = "";
		document.getElementById("spnLocation").innerHTML = "Country"
		document.getElementById("tdLocation").innerHTML = "";
		document.getElementById("tdLocation").innerHTML = "<SELECT name='lstLocation' id='lstLocation' size='5' class='azjtextarea' style='width:180px;' scroling='no'></SELECT>";

		document.getElementById("spnSelectedLocation").style.color = "#535a62";
		document.getElementById("spnSelectedLocation").innerHTML = "";
		document.getElementById("spnSelectedLocation").innerHTML = "Selected Country"
		document.getElementById("tdSelectedLocation").innerHTML = "";
		document.getElementById("tdSelectedLocation").innerHTML = "<SELECT name='lstSelectedLocation' id='lstSelectedLocation' size='5' class='azjtextarea' style='width:180px;'></SELECT>";

		document.getElementById("cmdAddLocation").disabled = false;
		document.getElementById("cmdRemoveLocation").disabled = false;
	}
	document.getElementById("cboDivision").selectedIndex = 0;

	//document.getElementById("cmdAddLocation").disabled = false;
	//document.getElementById("cmdRemoveLocation").disabled = false;
	
}
/*
SET LOCATION VALUE FOR ANYWHERE IN BANGLADESH: 
*/	
function SetJobLocation_AnywhereInBangladesh(strValue)
{
	if(parseInt(strValue) == "-2")
	{
		//document.getElementById("spnDivision").style.color = "#535a62";
		//document.getElementById("cboDivision").disabled = false;
		

		document.getElementById("spnLocation").innerHTML = "";
		document.getElementById("spnLocation").innerHTML = "District"
		document.getElementById("tdLocation").innerHTML = "";
		document.getElementById("tdLocation").innerHTML = "<SELECT name='lstLocation' id='lstLocation' size='5' class='azjtextarea' style='width:180px;' scroling='no'></SELECT>";

		document.getElementById("spnSelectedLocation").innerHTML = "";
		document.getElementById("spnSelectedLocation").innerHTML = "Selected District"
		document.getElementById("tdSelectedLocation").innerHTML = "";
		document.getElementById("tdSelectedLocation").innerHTML = "<SELECT name='lstSelectedLocation' id='lstSelectedLocation' size='5' class='azjtextarea' style='width:180px;'></SELECT>";
		
		document.getElementById("cmdAddLocation").disabled = true;
		document.getElementById("cmdRemoveLocation").disabled = true;
		document.getElementById("txtSelectedLocationList").value = ""
		document.getElementById("txtSelectedLocationList").value = "-1";
	}
	else
	{
		document.getElementById("cmdAddLocation").disabled = false;
		document.getElementById("cmdRemoveLocation").disabled = false;
		//document.getElementById("txtSelectedLocationList").value = "";
	}
}
/*----------------------------------------
ADD LOCATION IN THE SELECTED LOCATION LIST:
-----------------------------------------*/
function Add_Location()
{
	var Flag = 0;
	var strHtml = "";
	var lstLocationList  = document.getElementById("lstLocation");
	var lstSelectedLocationList = document.getElementById("lstSelectedLocation");

	/*
	ADD THE FIRST LOCATION IN AN EMPTY LIST:
	*/
	if (lstSelectedLocationList.length == 0)
	{
		if (lstLocationList.selectedIndex != -1)
		{
			strHtml = "<SELECT name='lstSelectedLocation' id='lstSelectedLocation' size='5' class='azjtextarea' style='width:180px;'>";
			strHtml = strHtml + "<option value='" + lstLocationList.options[lstLocationList.selectedIndex].value + "'>" + lstLocationList.options[lstLocationList.selectedIndex].text  + "</option>";
			strHtml = strHtml + "</SELECT>";
						
			document.getElementById("tdSelectedLocation").innerHTML = "";
			document.getElementById("tdSelectedLocation").innerHTML = strHtml;
		}
	}
	/*
	ADD THE LOCATION IN A NON EMPTY LIST:
	*/	
	if (lstSelectedLocationList.length > 0)
	{
		/*
		SERCHING THE MAXIMUM SELECTION(LOCATION) LIMIT:
		*/		
		if(lstSelectedLocationList.length >= 10)
		{
			alert("You cannot select more then 10 locations name!");
			Flag = 0;
		}
		else
		{
			/*
			SERCHING THE SELECTED LOCATION IS DUPLICATE OR NOT:
			*/			
			for(i = 0; i < lstSelectedLocationList.length; i++)
			{
				if (lstSelectedLocationList.options[i].value == lstLocationList.options[lstLocationList.selectedIndex].value)
				{
					alert("This location name already selected!");
					Flag = 0;
					break;
				}
				else
				{	
					Flag = 1;
				} 			
			}
		}
		/*
		ADD THE SELECTED LOCATION  IN A NON EMPTY LIST
		AFTER IT HAS PASSED FROM DUPLICATION CHECKING:
		*/
		if (Flag == 1)
		{
			for(i = 0; i < lstSelectedLocationList.length; i++)
			{
				strHtml = "<SELECT name='lstSelectedLocation' id='lstSelectedLocation' size='5' class='azjtextarea' style='width:180px;'>";				
				for (i = 0; i <= lstSelectedLocationList.length-1; i++)
				{
					strHtml = strHtml + "<option value='" + lstSelectedLocationList.options[i].value + "'>" + lstSelectedLocationList.options[i].text  + "</option>";					
				}
				strHtml = strHtml + "<option value='" + lstLocationList.options[lstLocationList.selectedIndex].value + "'>" + lstLocationList.options[lstLocationList.selectedIndex].text  + "</option>";
				strHtml = strHtml + "</SELECT>";
				
				document.getElementById("tdSelectedLocation").innerHTML = "";
				document.getElementById("tdSelectedLocation").innerHTML = strHtml;
			}			
		}
	}
}

/*---------------------------------------------
REMOVE LOCATION FROM THE SELECTED LOCATION LIST:
-----------------------------------------------*/
function Remove_Location()
{
	var strHtml = "";
	var lstSelectedLocationList = document.getElementById("lstSelectedLocation");

	/*
	CHECK THE SELECTED LOCATION LIST IS EMPTY OR NOT:
	*/
	if(lstSelectedLocationList.length > 0)
	{
		/*
		CHECK THE LOCATION IS SELECTED IN THE LIST:
		*/		
		if(lstSelectedLocationList.selectedIndex != -1)
		{
			strHtml = "<SELECT name='lstSelectedLocation' id='lstSelectedLocation' size='5' class='azjtextarea' style='width:180px;'>";
			for(i = 0; i <= lstSelectedLocationList.length-1; i++)			
			{
				/*
				LOAD ALL THE PREVIOUSLY SELECTED LOCATION IN THE LIST EXCEPT THE SELECTED ONE:
				*/
				if (lstSelectedLocationList.options[lstSelectedLocationList.selectedIndex].value != lstSelectedLocationList.options[i].value)
				{
					strHtml = strHtml + "<option value='" + lstSelectedLocationList.options[i].value + "'>" + lstSelectedLocationList.options[i].text  + "</option>";					
				}
			}
			strHtml = strHtml + "</SELECT>";
			document.getElementById("tdSelectedLocation").innerHTML = "";
			document.getElementById("tdSelectedLocation").innerHTML = strHtml;			
		}
	}
}
/*------------------------------------------------------
UPDATE THE HIDDEN CONTROL WITH THE SELECTED LOCATION ID:
-------------------------------------------------------*/
function UpdateLocationIDList()
{
	var strSelectedLocationID = "";
	var lstSelectedLocationList = document.getElementById("lstSelectedLocation");
	
	document.getElementById("txtSelectedLocationList").value = "";
	if(lstSelectedLocationList.length > 0)
	{
		for(i = 0; i< lstSelectedLocationList.length; i++)
		{
			if (strSelectedLocationID ==  "")
			{
				strSelectedLocationID = lstSelectedLocationList.options[i].value;
			}
			else
			{
				strSelectedLocationID = strSelectedLocationID + "," + lstSelectedLocationList.options[i].value;
			}			
		}		
	}
	document.getElementById("txtSelectedLocationList").value = strSelectedLocationID;	
}
function SetAliasName()
{	
	if(document.getElementById("optCompanyName").checked == true)
	{
		document.getElementById("spnAliasName").style.color = "#999999";
		document.getElementById("txtAliasName").value = "";
		document.getElementById("txtAliasName").style.backgroundColor= "#F7F7F7";		
		document.getElementById("txtAliasName").disabled = true;
	}
	
	if(document.getElementById("optOtherName").checked == true)
	{
	   document.getElementById("spnAliasName").style.color = "#226EC7";
	   document.getElementById("txtAliasName").disabled = false;
	   document.getElementById("txtAliasName").style.backgroundColor= "#FFFFFF";	   	   
	   document.getElementById("txtAliasName").value = document.getElementById("txtAliasName2").value;
	   document.getElementById("txtAliasName").focus();
	}
}

function SetExperience()
{	
	if (document.getElementById("optExperienceRequired").checked == true)
	{
		document.getElementById("spnExperienceYear").style.color = "#226EC7";
		
		document.getElementById("spnExperienceFrom").style.color = "#535a62";
		document.getElementById("txtExperience").innerHTML = "";
		document.getElementById("txtExperience").disabled = false;
		
		
		document.getElementById("spnExperienceList").style.color = "#226EC7";		
		document.getElementById("lstExperienceList").disabled = false;
		
		document.getElementById("spnBusinessAreaList").style.color = "#226EC7";
		document.getElementById("lstBusinessList").disabled = false;		
		
		document.getElementById("cmdAddExperience").disabled = false;
		document.getElementById("cmdRemoveExperience").disabled = false;
		
		document.getElementById("cmdAddBusiness").disabled = false;
		document.getElementById("cmdRemoveBusiness").disabled = false;
	}

	if (document.getElementById("optExperienceNotRequired").checked == true)
	{
		document.getElementById("spnExperienceYear").style.color = "#999999";
		
		document.getElementById("spnExperienceFrom").style.color = "#999999";		
		document.getElementById("txtExperience").innerHTML = "";
		document.getElementById("txtExperience").disabled = true;
		
		
		
		document.getElementById("spnExperienceList").style.color = "#999999";		
		document.getElementById("lstExperienceList").disabled = true;		

		document.getElementById("spnBusinessAreaList").style.color = "#999999";
		document.getElementById("lstBusinessList").disabled = true;		


		document.getElementById("cmdAddExperience").disabled = true;
		document.getElementById("cmdRemoveExperience").disabled = true;		
		
		document.getElementById("cmdAddBusiness").disabled = true;
		document.getElementById("cmdRemoveBusiness").disabled = true;		
	}	
	document.getElementById("txtSelectedExperienceList").value = "";
	document.getElementById("tdSelectedExperienceList").innerHTML = "<SELECT name='lstSelectedExperienceList' id='lstSelectedExperienceList' size='5' class='azjtextarea' style='width:180px;'></SELECT>";
	document.getElementById("txtSelectedBusinessList").value = "";
	document.getElementById("tdSelectedBusinessList").innerHTML = "<SELECT name='lstSelectedBusinessList' id='lstSelectedBusinessList' size='5' class='azjtextarea' style='width:180px;'>"
}

function ShowCorporateEmail()
{
	if(document.getElementById("chkCorporateEmail").checked == true)
	{
		document.getElementById("txtAppliedEmail").value = document.getElementById("txtCorporateEmail").value;
	}
	else
	{
		document.getElementById("txtAppliedEmail").value = "";
	}
}

function SetEmailAttachmentCV()
{
	if(document.getElementById("chkEmailAttachmentCV").checked == true)
	{
		document.getElementById("txtAppliedEmail").disabled = false;
		document.getElementById("txtAppliedEmail").style.backgroundColor = "#FFFFFF";		
		document.getElementById("txtAppliedEmail").focus();
		document.getElementById("chkCorporateEmail").disabled = false;
	}
	else
	{
		document.getElementById("txtAppliedEmail").value = "";
		document.getElementById("txtAppliedEmail").disabled = true;
		document.getElementById("txtAppliedEmail").style.backgroundColor = "#F7F7F7";
		document.getElementById("chkCorporateEmail").checked = false;
		document.getElementById("chkCorporateEmail").disabled = true;		
	}	
}

function SetApplyInstruction()
{
	if(document.getElementById("chkEmailAttachmentCV").checked == true || document.getElementById("chkHardCopyCV").checked == true)
	{
		document.getElementById("spnApplyInstruction").style.color = "#226EC7";
		document.getElementById("txtApplyInstruction").style.backgroundColor = "#FFFFFF";		
		document.getElementById("txtApplyInstruction").disabled = false;		
	}

	if(document.getElementById("chkEmailAttachmentCV").checked == false && document.getElementById("chkHardCopyCV").checked == false)
	{
		document.getElementById("spnApplyInstruction").style.color = "#999999";
		document.getElementById("txtApplyInstruction").value = "";
		document.getElementById("txtApplyInstruction").style.backgroundColor = "#F7F7F7";		
		document.getElementById("txtApplyInstruction").disabled = true;
	}
}
function SetHideCompanyAddress()
{
	/*
	NOTES: THIS LOGIC HAS BEEN MADE DISABLE AT 13 JUNE 2007.
	
	if(document.getElementById("chkHardCopyCV").checked == true)
	{
		document.getElementById("spnHideCompanyAddress").style.color = "#999999";
		document.getElementById("chkHideCompanyAddress").checked = false;		
		document.getElementById("chkHideCompanyAddress").disabled = true;
	}
	else
	{
		document.getElementById("spnHideCompanyAddress").style.color = "#226EC7";
		document.getElementById("chkHideCompanyAddress").disabled = false;
	}
	*/
}
function SetFormActionToStep01()
{
	document.getElementById("frmJobPostingStep02").action = "NewJob.php";
	document.getElementById("frmJobPostingStep02").submit();
}
function SetSalaryRange()
{
	document.getElementById("txtSalaryFrom").value = "";
	document.getElementById("txtSalaryTo").value = "";
	
	if(document.getElementById("optSalaryRange").checked == false)
	{
		document.getElementById("spnMinimumSalary").style.color = "#999999"
		document.getElementById("txtSalaryFrom").disabled = true;
		document.getElementById("spnMaximumSalary").style.color = "#999999"		
		document.getElementById("txtSalaryTo").disabled = true;
		document.getElementById("spnBDT").style.color = "#999999"				
	}
	
	if(document.getElementById("optSalaryRange").checked == true)
	{
		document.getElementById("spnMinimumSalary").style.color = "#535A62"
		document.getElementById("txtSalaryFrom").disabled = false;
		document.getElementById("spnMaximumSalary").style.color = "#535A62"		
		document.getElementById("txtSalaryTo").disabled = false;
		document.getElementById("spnBDT").style.color = "#535A62"						
	}
}

function IsPostedJobValid_Step01(strModuleType)
{
	if (strModuleType == "JobInsert")
	{
		/*CHECK JOB CATEGORY:*/
		if (document.getElementById("cboJobCategory").value == "-1")
		{
			alert("Please select job category.");
			document.getElementById("cboJobCategory").focus();
			return false;
		}
		/*CHECK JOB TITLE:*/
		if (document.getElementById("txtJobTitle").value == "")
		{
			alert("Please type job title.");
			document.getElementById("txtJobTitle").focus();
			return false;
		}
	}
	
	/*CHECK TOTAL NUMBER OF VACANCY:*/
	if (document.getElementById("txtTotalVacancy").value == "")
	{
		alert("Please type total number of vacancy.");
		document.getElementById("txtTotalVacancy").focus();
		return false;
	}
	
	/*CHECK CV RECEIVING OPTIONS:*/
	if (document.getElementById("chkOnlineCV").checked == false && document.getElementById("chkEmailAttachmentCV").checked == false && document.getElementById("chkHardCopyCV").checked == false)
	{
		alert("Please select at least one option which indicates how you want to receive job seekers resume.");
		document.getElementById("chkOnlineCV").focus();
		return false;
	}
	
	if (document.getElementById("chkEmailAttachmentCV").checked == true )
	{
		if (document.getElementById("txtAppliedEmail").value == "" )
		{
		   alert("Please type e-mail address where you want to receive resume as e-mail attachment.");
		   document.getElementById("txtAppliedEmail").focus();
		   return false;
		}

		elem = document.getElementById("txtAppliedEmail");
		
		var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
		if(elem.value.match(emailExp))
		{
			//return true;
		}
		else
		{
			alert("Invalid e-mail address! Please type your e-mail address properly.");
			elem.focus();
			return false;
		}
	}

	/*CHECK APPLY INSTRUCTION:*/	
	if(document.getElementById("chkEmailAttachmentCV").checked == true || document.getElementById("chkHardCopyCV").checked == true)
	{
		if (document.getElementById("txtApplyInstruction").value == "")
		{
			alert("Please type instructions to apply for this job.");
			document.getElementById("txtApplyInstruction").focus();
			return false;
		}
	}

	/*CHECK JOB DEADLINE:*/	
	if(parseInt(document.getElementById("cboDay").value) == -1)
	{
	   alert("Invalid job deadline! Please select job deadline properly.");
	   document.getElementById("cboDay").focus();
	   return false;
	}

	if(parseInt(document.getElementById("cboMonth").value) == -1)
	{
	   alert("Invalid job deadline! Please select job deadline properly.");
	   document.getElementById("cboMonth").focus();
	   return false;
	}

	if(parseInt(document.getElementById("cboYear").value) == -1)
	{
	   alert("Invalid job deadline! Please select job deadline properly.");		
	   document.getElementById("cboYear").focus();
	   return false;
	}

	/*CHECK BILLING CONTACT:*/		
	if(document.getElementById("txtBillingContact").value == "")
	{
		alert("Please type the billing contact�s name.");
		document.getElementById("txtBillingContact").focus();
		return false;
	}

	/*CHECK BILLING CONTACT DESIGNATION:*/		
	if(document.getElementById("txtDesignation").value == "")
	{
		alert("Please type billing contact�s designation.");
		document.getElementById("txtDesignation").focus();
		return false;
	}
	
	if(document.getElementById("optOtherName").checked == true)
	{
		if(document.getElementById("txtAliasName").value == "")
		{
			alert("Please type alternative name for your company.");
			document.getElementById("txtAliasName").focus();
			return false;
		}
	}
	
	return true;
}

function IsPostedJobValid_Step02()
{	
	/*CHECK JOB LEVEL:*/		
	if(document.getElementById("chkJobLevel1").checked == false && document.getElementById("chkJobLevel2").checked == false && document.getElementById("chkJobLevel3").checked == false)
	{
		alert("Please mention job level.");
		document.getElementById("chkJobLevel1").focus();
		return false;
	}
	
	/*CHECK ACADEMIC QUALIFICATION:*/		
	if(document.getElementById("txtEducation").value == "")
	{
		alert("Please type required academic qualification for this job.");
		document.getElementById("txtEducation").focus();
		return false;
	}	
	/*CHECK JOB DESCRIPTION/RESPONSIBILITY:*/		
	if(document.getElementById("txtJobDescription").value == "")
	{
		alert("Please type job description/responsibility.");
		document.getElementById("txtJobDescription").focus();
		return false;
	}
	/*CHECK ADDITIONAL JOB REQUIREMENTS*/
	if(document.getElementById("txtJobRequirements").value == "")
	{
		alert("Please type Additional Job Requirements.");
		document.getElementById("txtJobRequirements").focus();
		return false;
	}
	
	/*CHECK TOTAL YEARS OF EXPERIENCE*/
	if (document.getElementById("optExperienceRequired").checked == true)
	{
		if(parseInt(document.getElementById("cboExperienceFrom").value) == -1 && parseInt(document.getElementById("cboExperienceTo").value) == -1)
		{
			alert("Please select years of experience required for this job.")
			document.getElementById("cboExperienceFrom").focus();
			return false;
		}
	}	
	/*CHECK JOB LOCATION*/
	if(document.getElementById("txtSelectedLocationList").value == "")
	{
		alert("Please select job location.");
		document.getElementById("lstLocation").focus();
		return false;
	}
	/*CHECK SALARY RANGE*/
	if(document.getElementById("optSalaryRange").checked == true)
	{
		if(document.getElementById("txtSalaryFrom").value == "" && document.getElementById("txtSalaryTo").value == "")
		{
			alert("Please mention salary range for this job.");
			document.getElementById("txtSalaryFrom").focus();
			return false;
		}
	}
	
	return true;
}

function IsPostedJobValid_Edit()
{
	var Flag1; 
	var Flag2;
	var Flag3;
	
	Flag1 = IsPostedJobValid_Step01("JobEdit");	
	
	if (Flag1 == true)
	{
		Flag3 = true;
		Flag2 = IsPostedJobValid_Step02();
		if (Flag2 == true)
		{
			Flag3 = true;
		}
		else
		{
			Flag3 = false;
		}
	}
	else
	{
		Flag3 = false;
	}
	
	if (Flag3 == true)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function blockNonNumbers(obj,e, allowDecimal, allowNegative)
{
	var key;
	var isCtrl = false;
	var keychar;
	var reg;

	if(window.event) 
	{
		key = e.keyCode;
		isCtrl = window.event.ctrlKey
	}
	else if(e.which) 
	{
		key = e.which;
		isCtrl = e.ctrlKey;
	}

	if (isNaN(key)) return true;

	keychar = String.fromCharCode(key);

	// CHECK FOR BACKSPACE OR DELETE, Ctrl 
	if (key == 8 || isCtrl)
	{
		return true;
	}

	reg = /\d/;
	var isFirstN = allowNegative ? keychar == '-' && obj.value.indexOf('-') == -1 : false;
	var isFirstD = allowDecimal ? keychar == '.' && obj.value.indexOf('.') == -1 : false;

	return isFirstN || isFirstD || reg.test(keychar);
}

function CheckNumber(svalue)
{
	var val = document.getElementById(svalue).value;
	var l = val.length;
	var blnState = false;
	for (i = 0; i < l; i++)
	{
		if (!(val.charCodeAt(i)>=48 && val.charCodeAt(i)<=57))
			blnState = true
		
	}
	if (blnState == true)
	{
		alert("Please enter numeric value only.");
		document.getElementById(svalue).value = ""; 
		document.getElementById(svalue).focus();
		return false;
	}
}	