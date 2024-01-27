array = [   document.getElementById('Difficulty'),                      //把所有輸入的值宣告在陣列裡
            document.getElementById('DayTimeSpeedRate'),
            document.getElementById('NightTimeSpeedRate'),
            document.getElementById('ExpRate'),
            document.getElementById('PalCaptureRate'),
            document.getElementById('PalSpawnNumRate'),
            document.getElementById('PalDamageRateAttack'),
            document.getElementById('PalDamageRateDefense'),
            document.getElementById('PlayerDamageRateAttack'),
            document.getElementById('PlayerDamageRateDefense'),
            document.getElementById('PlayerStomachDecreaceRate'),
            document.getElementById('PlayerStaminaDecreaceRate'),
            document.getElementById('PlayerAutoHPRegeneRate'),
            document.getElementById('PlayerAutoHpRegeneRateInSleep'),
            document.getElementById('PalStomachDecreaceRate'),
            document.getElementById('PalStaminaDecreaceRate'),
            document.getElementById('PalAutoHPRegeneRate'),
            document.getElementById('PalAutoHpRegeneRateInSleep'),
            document.getElementById('BuildObjectDamageRate'),
            document.getElementById('BuildObjectDeteriorationDamageRate'),
            document.getElementById('CollectionDropRate'),
            document.getElementById('CollectionObjectHpRate'),
            document.getElementById('CollectionObjectRespawnSpeedRate'),
            document.getElementById('EnemyDropItemRate'),
            document.getElementById('DeathPenalty'),
            document.getElementById('bEnablePlayerToPlayerDamage'),
            document.getElementById('bEnableFriendlyFire'),
            document.getElementById('bEnableInvaderEnemy'),
            document.getElementById('bActiveUNKO'),
            document.getElementById('bEnableAimAssistPad'),
            document.getElementById('bEnableAimAssistKeyboard'),
            document.getElementById('DropItemMaxNum'),
            document.getElementById('DropItemMaxNum_UNKO'),
            document.getElementById('BaseCampMaxNum'),
            document.getElementById('BaseCampWorkerMaxNum'),
            document.getElementById('DropItemAliveMaxHours'),
            document.getElementById('bAutoResetGuildNoOnlinePlayers'),
            document.getElementById('AutoResetGuildTimeNoOnlinePlayers'),
            document.getElementById('GuildPlayerMaxNum'),
            document.getElementById('PalEggDefaultHatchingTime'),
            document.getElementById('WorkSpeedRate'),
            document.getElementById('bIsMultiplay'),
            document.getElementById('bIsPvP'),
            document.getElementById('bCanPickupOtherGuildDeathPenaltyDrop'),
            document.getElementById('bEnableNonLoginPenalty'),
            document.getElementById('bEnableFastTravel'),
            document.getElementById('bIsStartLocationSelectByMap'),
            document.getElementById('bExistPlayerAfterLogout'),
            document.getElementById('bEnableDefenseOtherGuildPlayer'),
            document.getElementById('CoopPlayerMaxNum'),
            document.getElementById('ServerPlayerMaxNum'),
            document.getElementById('ServerName'),
            document.getElementById('ServerDescription'),               //預設值為空白 故為""
            document.getElementById('AdminPassword'),                   //預設值為空白 故為""
            document.getElementById('ServerPassword'),                  //預設值為空白 故為""
            document.getElementById('PublicPort'),
            document.getElementById('PublicIP'),                        //預設值為空白 故為""
            document.getElementById('RCONEnabled'),
            document.getElementById('RCONPort'),
            document.getElementById('Region'),                          //預設值為空白 故為""
            document.getElementById('bUseAuth'),
];
let flag = 0;                                                           //確認按鈕是不是第一次被按下，按下之前，Flag為0
const output = document.getElementById("setting")                       //宣告output並讓其等於setting(我在HTML那做為輸出)的ID，之後要做改變會反映在HTML那裏相對應的值
document.getElementById('outputworldsetting').onclick = function(){     //按鈕觸發後會執行以下動作，主要是用迴圈把輸入值一個一個加在輸出上
    if (flag == 0){                                                 
    
        output.textContent += 'OptionSettings=('                        //先讓output加上其內容
    
        for (var i = 0; i < array.length; i++){                         
            if (i == 52 || i == 53 || i == 54 || i == 56|| i == 59) {   //由於我不知道要怎麼讓HTML那裡的Value設成 "" ，所以我在這裡手動加上去做為
                output.textContent += array[i].name + "=" + '"' + array[i].value + '"' + ",";
        
            }
            else {
                output.textContent += array[i].name + "=" + array[i].value + ",";
            }
        }
        output.textContent += 'BanListURL="https://api.palworldgame.com/api/banlist.txt")'
        flag = 1                                                        //Flag設為1，代表按鈕已經按過了
    }

    else if (flag == 1){                                                
        output.textContent = ""                                         //如果重複觸發就把output內容清除

        output.textContent += 'OptionSettings=('                        //先讓output加上其內容
    
        for (var i = 0; i < array.length; i++){                         
            if (i == 52 || i == 53 || i == 54 || i == 56|| i == 59) {   //由於我不知道要怎麼讓HTML那裡的Value設成 "" ，所以我在app.js裡面設
                output.textContent += array[i].name + "=" + '"' + array[i].value + '"' + ",";
        
            }
            else {
                output.textContent += array[i].name + "=" + array[i].value + ",";
            }
        }
        output.textContent += 'BanListURL="https://api.palworldgame.com/api/banlist.txt")'
        flag = 1
    }
    }

