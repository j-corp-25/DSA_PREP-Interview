# Hashes

Like an array a hash table we have an index and an array, in a hash we have a key and value

To begin with a hash function takes a input and generates a random fix length of mixed numbers and characters then this gets stored in memory

Every time we pass something through a hash the action above happens

One of the cons is that it can allocate to the same memory address which causes a collission . Normally if there are no collissions to access its O(1) but if there is a big collission it would be O(n).

You can adress this by using different strats such as Open addressing and Robin hood hashing.


