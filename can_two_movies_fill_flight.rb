def can_two_movies_fill_flight?(movie_lengths, flight_length)

  # Determine if two movie runtimes add up to the flight length
  seen = {}
  movie_lengths.each do |n|
    left = flight_length - n
    return true if seen.has_key?(left)
    seen[n] = true
  end

  false
end

