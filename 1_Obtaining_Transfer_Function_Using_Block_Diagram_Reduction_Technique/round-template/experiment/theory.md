The transfer functions of each component are represented in the blocks. All the blocks carries individual component transfer function are connected through arrow lines to indicate the direction of the flow of signals. The overall transfer function of the system can be obtained by applying block diagram reduction rules. The rules are framed in such a way that any modification done on the block diagram not affect the relations between the input and output of the each blocks. In between the blocks there may be summing point or branch point. The summing points add or subtract the two and more than two signals. The signal from the blocks goes concurrently to other blocks through branch points or summing points. The main elements of the block diagram are blocks, summing point and branch point or take off point. In the block diagram approach all system variables are linked to each other through functional blocks.
Formulae Used
The basic formulas used to find the overall transfer function for the given block diagram are :\
⦁	When blocks are connected in cascade the reduced gain is Gn = G1 * G2 * …*Gn\
⦁	When blocks are connected in parallel the reduced gain is Gn = G1 + G2 + …+Gn\
⦁	When take-off point is shifted after the gain block, then the reduced gain Gn is modified by adding a block of transfer function ‘1/G’ in series with the signal taking off from that point.\
⦁	When take-off point is shifted before the gain block, then the reduced gain Gn is modified by adding a block of transfer function ‘G’ in series with the signal taking off from that point.\
⦁	When summing point is shifted after the gain block, then the reduced gain Gn is modified by adding a block of transfer function ‘G’before the summing point.\
⦁	When summing point is shifted before the gain block, then the reduced gain Gn is modified by addinga block of transfer function ‘1/G’ before the summing point.\
⦁	In order to eliminate the negative feedback loop in a closed loop system having the feedback H, the block diagram is modified by C(S) / R(S) = G / (1+GH),
where C(S) is the output, R(S) is the input and G is the gain block.\
⦁	In order to eliminate the positive feedback loop in a closed loop system having the feedback H, the block diagram is modified by C(S) / R(S) = G / (1-GH),
Where,  C(S) is the output, R(S) is the input and G is the gain block.


