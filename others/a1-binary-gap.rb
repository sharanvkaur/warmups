def solution(n)
  max_gap = 0
  cur_gap = 0
  one_end = false
  n.to_s(2).each_char do |digit|
    if digit == '0'
      cur_gap += 1 if one_end
    else
      one_end = true
      max_gap = [max_gap, cur_gap].max
      cur_gap = 0
    end
  end
  p max_gap
  # puts 'the number is:         ' + n.to_s, 'in binary it is:       ' + n.to_s(2), 'the maximum gap is:    ' + max_gap.to_s, '====='
end

solution(1)
solution(23)
solution(1234)
solution(2325)
solution(2157)
