def solution (x,a)

  check_array = (0..a.length).to_a
  p check_array

  check_array.each { |i| check_array[i]=0 }

  a.each_with_index do |ele, i|
    if (check_array[ele]==0)
      check_array[ele]=1
      x -= 1
    end
  return i if (x==0)

  end

  return -1
end

solution(6, [1,3,1,4,2,3,5,4])


# https://codility.com/demo/results/trainingMHSGZ4-79T/
# 100%
