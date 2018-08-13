$count = 1

def translate(str)

  first = str.split("")[0]
  # puts first
  # puts first.match(/[aeiou]/)
  # puts !!/[aeiou]/.match(first)

  # str.split("").each_with_index do |letter,index|
  #   if !!/[aeiou]/.match(letter)
  #     return "#{str}way"
  #   else
  #     return str
  # end

  if !!/[aeiou]/.match(first)
    if $count == 1
      return "#{str}way"
    else
      return "#{str}ay"
    end
  else
    $count += 1
    str = str.slice(1..-1) + first
    return translate(str)

  end




  # puts first

end

puts translate('glove')
