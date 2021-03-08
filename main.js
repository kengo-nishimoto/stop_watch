$(function() {
 
    // スタートボタン
    $('#tgCountupTimer #startButton').click(function() {
      
 
        timer = setInterval("countUp()", 100);
 
        $(this).attr('disabled', 'disabled');
        $('#tgCountupTimer #stopButton').removeAttr('disabled');
        $('#tgCountupTimer #resetButton').attr('disabled','disabled');
        
    });
 
 
    // ストップボタン
    $('#tgCountupTimer #stopButton').click(function() {
        // (一時)停止
        clearInterval(timer);
 
        $(this).attr('disabled', 'disabled');
        $('#tgCountupTimer #startButton').removeAttr('disabled');
        $('#tgCountupTimer #resetButton').removeAttr('disabled');
    });
 
 
    // クリアボタン
    $('#tgCountupTimer #resetButton').click(function() {
 
        msec = 0;
        sec  = 0;
        min  = 0;
        hour = 0;
 
        // 00:00:00:0にリセット
        $('#tgCountupTimer .time').html('0:0:0:0');
        clearInterval(timer);
 
        $(this).attr('disabled', 'disabled');
        $('#tgCountupTimer #stopButton').attr('disabled','disabled');
        $('#tgCountupTimer #startButton').removeAttr('disabled');
    });
});
 
msec = 0;
sec  = 0;
min  = 0;
hour = 0;
 
function countUp ()
{
    msec += 1;
 
    if (msec > 9) {
        msec = 0;
        sec += 1;
    }
 
    if (sec > 59) {
        sec = 0;
        min += 1;
    }
 
    if (min > 59) {
        min = 0;
        hour += 1;
    }
 
    // ミリ秒
    msecNumber = msec;
 
    // 秒
    if (sec < 10) {
        secNumber = sec.toString();
    } else {
        secNumber = sec;
    }
 
    // 分
    if (min < 10) {
        minNumber = min.toString();
    } else {
        minNumber = min;
    }
 
    // 時
    if (hour < 10) {
        hourNumber = hour.toString();
    } else {
        hourNumber = hour;
    }
 
    // 出力
    $('#tgCountupTimer .time').html(hourNumber + ':' + minNumber + ':' + secNumber + ':' + msecNumber);
}