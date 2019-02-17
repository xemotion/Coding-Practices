

# 데이터를 CSV를 저장하기 

import csv 

file = open('test.csv', 'w+')

try: 
    writer = csv.writer(file) 
    writer.writerow(('title', 'author', 'summary', 'publisher'))
    for i in range(20) :
        writer.writerow((i, i+2, i*2, i+2*2))

finally:
    file.close()  

