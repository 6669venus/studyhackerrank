process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var arr = [];
    for(var arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    let max = -9 * 7; let sum = 0;
    for (var k = 0; k < 4; k++) {
        for (var l = 0; l < 4; l++) {
            sum = arr[k][l] + arr[k][l+1] + arr[k][l+2] + arr[k+1][l+1] + arr[k+2][l] + arr[k+2][l+1] + arr[k+2][l+2];
            if (sum > max) { max = sum; }
        }
    }
    process.stdout.write(max.toString());
}