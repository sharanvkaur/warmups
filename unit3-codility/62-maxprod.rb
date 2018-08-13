def solution(a)
  a.sort!

  testLargest = a[-1] * a[-2] * a[-3]

  testNegs = a[0] * a[1] * a[-1]

  p [testLargest,testNegs].max


end

solution([0])


# https://codility.com/demo/results/trainingXDH5E8-HA2/
# 100%
