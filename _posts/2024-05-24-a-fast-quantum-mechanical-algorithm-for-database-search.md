---
title: A Fast Quantum Mechanical Algorithm for Database Search
author: jiheon_lee
description: A paper on Grover's algorithm
date: 2024-05-24 14:45:00 -0400
categories: [Paper Reading, Computer Science Paper]
tags: [Quantum Algorithm, Grover's Algorithm]
math: true
toc: true
---
## Introduction
In this paper, Grover introduces a quantum mechanical algorithm for identifying an record in database only in $O(\sqrt{N})$ steps compared to $O(N)$ steps that classical computer requires to do the same job.

## Illustration of Problem
Suppose there is an unsorted database containing $N$ items out of which only one item satisfies a given condition and has to be retrieved. It is possible to tell if an item satisfies the condition once it is retrieved in a single step. Additionally, assume that there is no sorting on the database that would aid the search.

## Background of Algorithm
There are three main quantum operations for Grover's algorithm: The first is the creation of a configuration in which the amplitude of the system being in any of the $2^n$ basic states of the system is equal; the second is the Fourier transformation operation; and the third is the selective rotation of different states.

### Hadamard Gate
A Hadamard gate, whose $2\times 2$ matrix representation is 

$$
\begin{equation}
    H = \frac{1}{\sqrt{2}} 
    \begin{bmatrix}
        1 & 1\\
        1 & -1
    \end{bmatrix},
\end{equation}
$$

can be performed on a $n$-bit system (with $2^n$ possible states) resulting a the configuration with an identical amplitude of $2^{-n/2}$ in each of the $2^n$ states. Moreover, consider the case when the starting state is another one of the $2^n$ states, i.e. a state described by an $n$ bit binary string with some 0s and some 1s. If $\tilde{x}$ is a $n$-bit binary string describing the starting state and $\tilde{y}$ is the $n$-bit binary string describing the resulting string, the sign of the amplitude of $\tilde{y}$ is determined by the parity of the bitwise dot product of $\tilde{x}$ and $\tilde{y}$, i.e., $(-1)^{\tilde{x} \cdot \tilde{y}}$. This process is referred to as the Fourier transformation.

### Selective Rotation
The transformation describing the selective rotation of the phase of the amplitude in certain states is of the form:

$$
\begin{equation}
\begin{bmatrix}
e^{i\phi_1} & 0 & 0 & 0\\
0 & e^{i\phi_2} & 0 & 0\\
0 & 0 & e^{i\phi_3} & 0\\
0 & 0 & 0 & e^{i\phi_4}
\end{bmatrix}
\end{equation}
$$

where $\phi_i$ is an arbitrary real number for all $i=1,2,3,4$. This transformation does not change the probability in each state since the square of the absolute value of the amplitude in each state stays same.

## Algorithm
1. Initialize the system to the distribution of same probability amplitude for all possible states by applying Hadamard gate on every input state, i.e.,
$$
\begin{equation}
\ket{\psi} = H^{\otimes N}\ket{\psi_0} =  \frac{1}{\sqrt{N}}\ket{\S_0} + \cdots + \frac{1}{\sqrt{N}}\ket{\S_{2^N}}
\end{equation}
$$
2. Repeat the following unitary operations $O(\sqrt{N})$ times:
    - Let the system by in any state S: in case $C(S) = 1$, rotate the phase by $\pi$. Otherwise, leave the system unchanged
    - Apply the diffusion transformation $D$ defined as 
    $$
    \begin{equation}
        D_{ij} = \begin{cases} 
            \frac{2}{N} & \text{ if } i\neq j
            -1 + \frac{2}{N} & \text{ if } i = j
        \end{cases}
    \end{equation}
    $$
> The diffusion transformation $D$ is equivalent to $FRF$ where $F$ is the Fourier Transformation Matrix and $R$ is the rotational matrix where $R\_{ij} = 0$ if $i\neq j$, $R\_{ii} = 1$ if $i=0$, and $R\_{ii} = -1$ if $i\neq 0$
{: .prompt-info }
3. Sample the resulting state. In case there is a unique state $S\_v$ such that $C(S\_v) = 1$, the final state is $S\_v$ with a probability at least 0.5.