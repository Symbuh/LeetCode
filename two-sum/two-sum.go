func twoSum(nums []int, target int) []int {
    /*
        Given an array of integers. nums and target return indicies of the two numbers such that they add up to target
        
        Each input has only one solution and you can't use the same element twice. 
        
    */
    var output []int;
    for i:=0; i<len(nums); i++ {
        for j:=i+1; j < len(nums); j++ {
            if(nums[i] + nums[j] == target) {
                output = append(output, i, j)
                return output;
            } 
        } 
    }
    return output;
}