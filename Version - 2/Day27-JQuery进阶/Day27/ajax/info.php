<?php
	/* 第一种是以 get来接收数据*/
//		if($_GET['name']=='zzl'){
//			echo '他是想要查张志林的资料';
//		}else{
//			echo '不存在这个人！！！';
//		};
	

	/*第二种是以  Post方式来接收数据*/
//		if($_POST['name']=='zzl'){
//				echo '他是想要查张志林的资料';
//			}else{
//				echo '不存在这个人！！！';
//			};
	

	/*第二种是以  Post方式来接收数据*/
		if($_POST["user"] == "michael"){
				echo '不存在这个人！！！';
			}else{
				echo '姓名:张志林,性别:男,年龄:18';
			};
	
?>