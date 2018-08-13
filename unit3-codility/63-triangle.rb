def solution(a)
  return 0 if a.length < 3
  a.sort!
  a.each_with_index do |e, i|
    return 0 if i >= a.length - 2
    if a[i] + a[i+1] > a[i+2]
      return 1, a[i]
    end
  end
end

# puts solution([])

# https://codility.com/demo/results/trainingKWNDB3-E9S/
# 100%

def solution(a)
  a.sort!
  a.each_with_index do |e, i|
    return 0 if i >= a.length - 2
    if a[i] + a[i+1] > a[i+2]
      return 1, a[i]
    end
  end
end

# puts solution([])

# https://codility.com/demo/results/training8ZM55C-4Y3/
# 93%
