function bombNums(nums, params) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == params[0]) {
            for (let j = i - params[1]; j < i + 1; j++) {
                nums[j] = 0;
            };
            for (let j = i + 1; j < i + 1 + params[1]; j++) {
                nums[j] = 0;
            };
        };
    };
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        count += nums[i];
    };
    console.log(count);
};

//bombNums([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])
bombNums([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1])