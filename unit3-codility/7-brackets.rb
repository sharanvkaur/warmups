# Brackets

def solution(s)
  if s.length % 2 == 1
    puts 0
  else
    pairs = {
      "(" => ")",
      "{" => "}",
      "[" => "]"
    }

    stack = []

    s.each_char do |char|
      if char =~ /[\(\{\[]/
        stack.push(char)
      else
        return 0 if stack.length == 0
      end
    end
    p stack.length

    # if stack.length > 0
    #   puts 1
    # else
    #   puts 0
    # end
  end
end

solution(')))(')

#https://codility.com/demo/results/training4RR9GU-J4A/
# 37%
