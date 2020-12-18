import argparse
import os, sys
import socket
import json

ip = 'localhost'
port = 8000
s = socket.socket()
s.connect((ip, port))
del sys.argv[0]
data= { 'flag' : sys.argv }


s.send(json.dumps(data).encode())

s.close()