def make_bricks(small, big, goal):
  bid_need = min(big, goal // 5)
  return goal - (bid_need * 5) <= small
