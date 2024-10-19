# Bitwise Operatorları

Dástúrlewdi endi úyrenip baslaǵanda operatorlar degen túsinikti heshkim shetlep óte almaydı: arifmetik, salıstırıw (comparison), teńlestiriw (assignment), logikalıq hám **bitwise** operatorları. Bul jerdegi **bitwise**dan tısqarı operatorlardıń barlıǵın ańsat ǵana úyreniwge boladı. Biraq, **bitwise** bir qansha qıyın bolıp qala beredi.

Soraw, bul operatorlar nesi menen ajıralıp turadi, nege onı úyreniwdi anaw-mınaw adam kelistire almaydı?

Buǵan sebep qılıp bul operatordıń [bit](https://en.wikipedia.org/wiki/Bit) yaǵnıy eń kishi maǵlıwmat ólshem birligi menen islesiwin aytıwımız múmkin.

Bul operatorǵa [operand](https://en.wikipedia.org/wiki/Operand) sıpatında qálegen, bizge tanıs bolǵan sanlardı beriwimiz múmkin, hám **bitwise** sol sanlardıń [binary](https://en.wikipedia.org/wiki/Binary_number) forması menen islesiwdi baslaydı.

> Binary dep ekilik sanaq sistemasına aytıladı, hám onda maǵlıwmatlar tek ǵana 0 hám 1 den paydalanılıp belgilenedi. Mısalı: 1 -> 0001, 2 -> 0010, 7 -> 0111, 10 -> 1010, 1824 -> 11100110000
> Decimal dep biz kúndelikli paydalanatuǵın 10 cifr: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 lardan quralǵan sanlarǵa aytıladı

Bul jerde **bitwise** operatorlarına mısal jazıw ushın **Python**nan paydalanamız, biraq bul túsinikler basqa barlıq tiller ushın birdey bola beredi.

Bul túrdegi operatorlarǵa: **AND &**, **OR |**, **XOR ^**, **NOT ~**, **Left Shift <<**, **Right Shift >>** lar kiredi.

## AND &

Bul operator sanlardın hár bir **bit**in bir-birine salıstıradı. Hám 2 **bit** ta 1ge teń bolsa, nátiyjeni 1ge teńeydi. Bunnan tısqarı hárqanday jaǵdayda 0ge teńeydi. Mısalı:

    a = 5 # Binaryda: 0101
    b = 3 # Binaryda: 0011
    result = a & b
    print(result) # Nátiyje: 1 (Binaryda: 0001)

Bul kodda tómendegi processler júz berdi:

1.  Sanlar binary formatına ózgertildi
2.  Hár bir bit ushın AND operatorı orınlandı:
    1. 010**1** menen 001**1** salıstırıldı, nátiyje: 1
    2. 01**0**1 menen 00**1**1 salıstırıldı, nátiyje: 0
    3. 0**1**01 menen 0**0**11 salıstırıldı, nátiyje: 0
    4. **0**101 menen **0**011 salıstırıldı, nátiyje: 0
3.  Barlıq nátiyje **0001** bolıp jıynaldı
4.  Aqırǵı nátiyjeni decimal kórinisine ótkerip qaytardı: 0001 -> 1

## OR |

Bul operator sanlardıń hár bir **bit**in bir-birine salıstıradı. Hám 2 **bit**ten keminde birewi 1ge teń bolsa da nátiyjeni 1ge teńeydı. 2 **bit** ta 0 bolıp qalǵan jaǵdayda ǵana nátiyjeni 0ge teńeydi. Mısalı:

    a = 5 # Binaryda: 0101
    b = 3 # Binaryda: 0011
    result = a | b
    print(result) # Nátiyje: 7 (Binaryda: 0111)

Bul kodda tómendegi processler júz berdi:

1.  Sanlar binary formatına ózgertildi
2.  Hár bir bit ushın OR operatorı orınlandı:
    1. 010**1** menen 001**1** salıstırıldı, nátiyje: 1
    2. 01**0**1 menen 00**1**1 salıstırıldı, nátiyje: 1
    3. 0**1**01 menen 0**0**11 salıstırıldı, nátiyje: 1
    4. **0**101 menen **0**011 salıstırıldı, nátiyje: 0
3.  Barlıq nátiyje **0111** bolıp jıynaldı
4.  Aqırǵı nátiyjeni decimal kórinisine ótkerip qaytardı: 0111 -> 7

## XOR ^

Bul operator sanlardıń hár bir **bit**in bir-birine salıstıradı. Hám 2 **bit** hár túrli bolǵan jaǵdayda ǵana nátiyjeni 1ge teńeydi. Eger 2 **bit** ta 1ge, yáki 0ge teń bolsa nátiyje 0 boladı. Mısalı:

    a = 5 # Binaryda: 0101
    b = 3 # Binaryda: 0011
    result = a ^ b
    print(result) # Nátiyje: 6 (Binaryda: 0110)

Bul kodda tómendegi processler júz berdi:

1.  Sanlar binary formatına ózgertildi
2.  Hár bir bit ushın XOR operatorı orınlandı:
    1. 010**1** menen 001**1** salıstırıldı, nátiyje: 0
    2. 01**0**1 menen 00**1**1 salıstırıldı, nátiyje: 1
    3. 0**1**01 menen 0**0**11 salıstırıldı, nátiyje: 1
    4. **0**101 menen **0**011 salıstırıldı, nátiyje: 0
3.  Barlıq nátiyje **0110** bolıp jıynaldı
4.  Aqırǵı nátiyjeni decimal kórinisine ótkerip qaytardı: 0111 -> 6

## NOT ~

Bul operator sannıń hár bir **bit**in qarama-qarsısına ózgertedi.

> Bilemiz, sanlar teris yáki oń boladı (+/-). Binaryda oń sanlardı belgilew ańsat, biraq teris sanlarda azǵantay quramalıraq boladı. Aldında belgisi bar sanlardı - signed, belgisi joqların - unsigned dep ataydı. Teris sandı belgilew ushın dáslep onıń absolute mánisi binaryda qanday ekeni belgilenedi. Hám aldına 0 qosıladı. 10->1010->01010. Hám aqırǵı nátiyje bitleri qarama-qarsısına ózgertiledi: 01010 -> 10101. Bul sol teris sanǵa teń boladı (-10).

Python, JS, C sıyaqlı tillerde pútin sanlar signed esaplanadı. Sonlıqtan usınday tillerde NOT operatorın pútin san menen paydalansaq sol sanǵa birdi qosıp **bit**lerin qarama-qarsısına ózgertedi yaǵnıy terisine ózgertip nátiyjeni qaytaradı.

"Birdi qosıp" degen jerine túsinbegen bolıwıńız múmkin, ol haqqında tolıq oqıw ushın: https://isaaccomputerscience.org/concepts/data_numbases_signed_integers?examBoard=all&stage=a_level&topic=number_representation

Mısalı:

    a = 5 # Binaryda: 0101
    result = ~a
    print(result) # Nátiyje: -6 (Binaryda: 1010)

Bul kodda tómendegi processler júz berdi:

1.  Sanlar binary formatına ózgertildi
2.  Hár bir bit ushın XOR operatorı orınlandı:
    1. 010**1**: 1-> 0
    2. 01**0**1: 0 -> 1
    3. 0**1**01: 1 -> 0
    4. **0**101: 0 -> 1
3.  Barlıq nátiyje **1010** bolıp jıynaldı
4.  Aqırǵı nátiyjeni decimal kórinisine ótkerip qaytardı: 1010 -> -6

## Left Shift <<

Bul operator 2 operand qabıllaydı: birinshi sandı binaryǵa ózgertip, onıń **bit**lerin ekinshi operandqa berilgen san márte shepke jıljıtadı. Hár jıljıǵanda sheptegi **bit**ler taslap jiberiledi, hám oń tárepke 0 qosıladı. Mısalı:

    a = 5 # Binaryda: 0101
    result = a << 1
    print(result) # Nátiyje: 10 (Binaryda: 1010)

Bul kodda tómendegi processler júz berdi:

1.  San binary formatına ózgertildi
2.  San ushın Left Shift operatorı orınlandı:
    - 0101 -> 1010
3.  Aqırǵı nátiyjeni decimal kórinisine ótkerip qaytardı: 1010 -> 10

Jıljıtıwǵa baylanıslı mısallar:

    x = 3 # Binaryda: 0011
    result x << 2
    print(result) # Nátiyje: 12 (Binaryda: 1100)

    z = 4 # Binaryda: 0000 0100 (aldına 0 qosıwǵa boladı, heshnárse ózgermeydi)
    result x << 3
    print(result) # Nátiyje: 32 (Binaryda: 0010 0000)

## Right Shift >>

Bul operator 2 operand qabıllaydı: birinshi sandı binaryǵa ózgertip, onıń **bit**lerin ekinshi operandqa berilgen san márte ońǵa jıljıtadı. Hár jıljıǵanda ońdaǵı **bit**ler taslap jiberiledi, hám shep tárepke 0 yáki eń sheptegi bit qosıladı. (Eger san unsigned bolsa 0 qosıladı, signed bolsa eń shepte qaysi bit turǵan bolsa sol qosıladı.) Mısalı:

    a = 5 # Binaryda: 0101
    result a >> 1
    print(result) # Nátiyje: 2 (Binaryda: 0010)

    b = -5 # Binaryda: 1111 1011
    result = b >> 1
    print(result) # Nátiyje: -3 (Binaryda: 1111 1101)

Birinshi mısalda san unsigned bolǵanı ushın ońǵa jıljıtıldı hám shepke 0 qosıldı. Ekinshi mısalda san signed bolǵanı ushın ońǵa jıljıtıldı hám shepke eń shepte turǵan bit qosıldı, yaǵnıy 1 qosıldı.

Juwmaqlap aytqanda, bitwise operatorları low-level programmingda payda beredi. Bul operatorlardan kriptografiya, networking, súwret sapasın jaqsılaw, súwretten maǵlıwmat ajıratıw, súwretti analizge tayarlaw, kompyuterdiń eń kishi kompyuter yadı orınları menen islesiwde kóp paydalanıladı.

Qáte-kemshilikler bolsa ózgertiń:)
