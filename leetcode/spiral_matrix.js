var printSpiral = function (matrix) {
    var i;
    var top = 0;
    var left = 0;
    var bottom = matrix.length;
    var right = matrix[0].length;

    while (top < bottom && left < right) {

        //print top 
        for (i = left; i < right; i += 1) {
            console.log(matrix[top][i]);
        }
        top++;

        //print right column
        for (i = top; i < bottom; i += 1) {
            console.log(matrix[i][right - 1]);
        }
        right--;

        if (top < bottom) {
            //print bottom
            for (i = right - 1; i >= left; i -= 1) {
                console.log(matrix[bottom - 1][i]);
            }
            bottom--;
        }

        if (left < right) {
            //print left column
            for (i = bottom - 1; i >= top; i -= 1) {
                console.log(matrix[i][left]);
            }
            left++;
        }
    }
};

let array = [[1,2,3,4],[5,6,7,8],[4,5,2,3]]
console.log(printSpiral(array))