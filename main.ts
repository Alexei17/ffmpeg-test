var ffmpeg = require('fluent-ffmpeg');
var command = ffmpeg();

ffmpeg('http://vidstorageaccount.blob.core.windows.net/videos/11024387751434772-Sample_5s.mp4?sp=r&st=2021-04-27T21:56:24Z&se=2024-01-07T05:56:24Z&sv=2020-02-10&sr=b&sig=7gVniTD3b%2FL1bfj9gNwfWJ%2FDtPaYXhEttf8wAkOB3Us%3D')
            .outputOptions(
                `-vf subtitles=sample.srt:force_style="'Fontsize=200,BorderStyle=4,Outline=0,Shadow=0'"`
            )
            .on('error', function(err, stdout, stderr) {
                if (err) {
                    console.log(err.message);
                    console.log("stdout:\n" + stdout);
                    console.log("stderr:\n" + stderr);
                }})
            .save('./test.mp4');
